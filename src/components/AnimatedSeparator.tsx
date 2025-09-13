import React from "react";

const AnimatedSeparator: React.FC = () => (
  <div className="relative w-full h-16 flex items-center justify-center">
  <div className="w-3/4 h-1.5 rounded-full bg-gradient-to-r from-white/60 via-blue-200/80 to-white/60 animate-gradientMove shadow-lg border border-blue-100 backdrop-blur-md" />
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
