import React from "react";

const AnimatedSeparator: React.FC = () => (
  <div className="relative w-full h-16 flex items-center justify-center">
  <div className="w-3/4 h-1.5 rounded-full bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-gradientMove border border-transparent" />
    <style>{`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradientMove {
        background-size: 200% 200%;
        animation: gradientMove 4s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default AnimatedSeparator;
