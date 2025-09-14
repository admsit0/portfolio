import React, { useEffect, useRef } from "react";

const ElegantRotatingBg: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = scrollY * 0.07; // slow, elegant rotation
      const scale = 1 + Math.sin(scrollY * 0.002) * 0.05; // gentle scale
      if (ref.current) {
        ref.current.style.transform = `rotate(${rotation}deg) scale(${scale})`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="elegant-rotating-bg"
      aria-hidden="true"
    >
      <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none">
        <circle cx="300" cy="300" r="280" stroke="#7e7e7e" strokeWidth="2" />
        <polygon points="300,60 540,300 300,540 60,300" stroke="#bdbdbd" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
};

export default ElegantRotatingBg;
