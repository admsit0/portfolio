import test from "node:test";
import assert from "node:assert/strict";
import { startHeroBackdrop } from "../src/lib/heroBackdrop.ts";

function environment(reduced = false) {
  const previous = new Map();
  const frames = new Map();
  const curves = [];
  const documentEvents = new Map();
  const surfaceEvents = new Map();
  const preferences = new Set();
  const observers = [];
  let frameId = 0;
  const media = {
    matches: reduced,
    addEventListener: (_, fn) => preferences.add(fn),
    removeEventListener: (_, fn) => preferences.delete(fn),
  };
  const document = {
    hidden: false,
    addEventListener: (name, fn) => documentEvents.set(name, fn),
    removeEventListener: (name) => documentEvents.delete(name),
  };
  class Observer {
    disconnected = false;
    constructor(callback) {
      this.callback = callback;
      observers.push(this);
    }
    observe() {}
    disconnect() {
      this.disconnected = true;
    }
    enter(isIntersecting) {
      this.callback([{ isIntersecting }]);
    }
  }
  const context = {
    clearRect() {},
    setTransform() {},
    beginPath() {},
    moveTo() {},
    stroke() {},
    bezierCurveTo(...values) {
      curves.push(values);
    },
  };
  const canvas = {
    getContext: () => context,
    dataset: {},
    width: 0,
    height: 0,
  };
  const surface = {
    getBoundingClientRect: () => ({ width: 1280, height: 500, left: 0 }),
    addEventListener: (name, fn) => surfaceEvents.set(name, fn),
    removeEventListener: (name) => surfaceEvents.delete(name),
  };
  for (const [name, value] of Object.entries({
    window: {
      matchMedia: (query) =>
        query.includes("reduced-motion") ? media : { matches: false },
      devicePixelRatio: 4,
    },
    document,
    IntersectionObserver: Observer,
    ResizeObserver: Observer,
    requestAnimationFrame: (callback) => {
      frames.set(++frameId, callback);
      return frameId;
    },
    cancelAnimationFrame: (id) => frames.delete(id),
  })) {
    previous.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
    Object.defineProperty(globalThis, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
  return {
    canvas,
    surface,
    curves,
    frames,
    observers,
    documentEvents,
    surfaceEvents,
    preferences,
    advance(time) {
      const [id, callback] = [...frames.entries()][0];
      frames.delete(id);
      callback(time);
    },
    hide() {
      document.hidden = true;
      documentEvents.get("visibilitychange")();
    },
    restore() {
      for (const [name, descriptor] of previous) {
        if (descriptor) Object.defineProperty(globalThis, name, descriptor);
        else Reflect.deleteProperty(globalThis, name);
      }
    },
  };
}

test("hero draws moving contours with capped resolution, throttling, and viewport pausing", () => {
  const env = environment();
  try {
    const dispose = startHeroBackdrop(env.canvas, env.surface);
    assert.equal(env.canvas.width, 2560, "DPR must not exceed two");
    assert.equal(env.canvas.dataset.motion, "running");
    env.advance(100);
    const before = env.curves.at(-1);
    const count = env.curves.length;
    env.advance(120);
    assert.equal(env.curves.length, count, "Skip frames above 30fps");
    env.advance(140);
    assert.notDeepEqual(
      env.curves.at(-1),
      before,
      "Contours must actually move",
    );
    env.observers[0].enter(false);
    assert.equal(env.canvas.dataset.motion, "paused");
    assert.equal(env.frames.size, 0);
    env.observers[0].enter(true);
    assert.equal(env.frames.size, 1);
    env.hide();
    assert.equal(env.frames.size, 0);
    dispose();
    assert.ok(env.observers.every((observer) => observer.disconnected));
    assert.equal(
      env.documentEvents.size + env.surfaceEvents.size + env.preferences.size,
      0,
    );
  } finally {
    env.restore();
  }
});

test("reduced motion retains the decorative drawing without scheduling any animation", () => {
  const env = environment(true);
  try {
    const dispose = startHeroBackdrop(env.canvas, env.surface);
    assert.ok(env.curves.length > 0);
    assert.equal(env.canvas.dataset.motion, "reduced");
    assert.equal(env.frames.size, 0);
    dispose();
  } finally {
    env.restore();
  }
});
