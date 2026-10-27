export function startHeroBackdrop(
  canvas: HTMLCanvasElement,
  surface: HTMLElement,
) {
  const context = canvas.getContext("2d");
  if (!context) return;
  if (
    typeof IntersectionObserver === "undefined" ||
    typeof ResizeObserver === "undefined"
  )
    return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  let width = 0;
  let height = 0;
  let frame = 0;
  let previous = 0;
  let phase = 0;
  let visible = true;
  let target = 0;
  let drift = 0;

  const draw = () => {
    context.clearRect(0, 0, width, height);
    context.strokeStyle = "rgba(36, 85, 238, 0.13)";
    context.lineWidth = 0.85;
    for (let line = 0; line < 9; line++) {
      const x = width * (0.72 + line * 0.043);
      const wave = Math.sin(phase * 0.22 + line * 0.19) * width * 0.035;
      context.beginPath();
      context.moveTo(x + wave, -20);
      context.bezierCurveTo(
        x - width * 0.21 + wave + drift,
        height * 0.32,
        x + width * 0.13 - wave + drift,
        height * 0.65,
        x + width * 0.08,
        height + 20,
      );
      context.stroke();
    }
  };
  const tick = (timestamp: number) => {
    frame = requestAnimationFrame(tick);
    if (previous && timestamp - previous < 33) return;
    phase += previous ? Math.min(timestamp - previous, 100) / 1000 : 0;
    previous = timestamp;
    drift += (target - drift) * 0.035;
    draw();
  };
  const refresh = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    previous = 0;
    if (reduced.matches) {
      target = 0;
      drift = 0;
    }
    draw();
    const running = visible && !document.hidden && !reduced.matches;
    canvas.dataset.motion = reduced.matches
      ? "reduced"
      : running
        ? "running"
        : "paused";
    if (running) frame = requestAnimationFrame(tick);
  };
  const resize = () => {
    const bounds = surface.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    refresh();
  };
  const move = (event: PointerEvent) => {
    if (!pointer.matches || reduced.matches) return;
    const bounds = surface.getBoundingClientRect();
    target = ((event.clientX - bounds.left) / bounds.width - 0.5) * 20;
  };
  const leave = () => {
    target = 0;
  };
  const viewport = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    refresh();
  });
  const size = new ResizeObserver(resize);
  viewport.observe(surface);
  size.observe(surface);
  surface.addEventListener("pointermove", move, { passive: true });
  surface.addEventListener("pointerleave", leave);
  document.addEventListener("visibilitychange", refresh);
  reduced.addEventListener("change", refresh);
  resize();
  return () => {
    cancelAnimationFrame(frame);
    viewport.disconnect();
    size.disconnect();
    surface.removeEventListener("pointermove", move);
    surface.removeEventListener("pointerleave", leave);
    document.removeEventListener("visibilitychange", refresh);
    reduced.removeEventListener("change", refresh);
  };
}
