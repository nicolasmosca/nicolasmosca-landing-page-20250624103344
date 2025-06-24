import React from "react";

/**
 * Luminova Logo – star icon with a warm gradient and matching gradient text.
 */
const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      {/* Star Icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="luminova-gradient"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l2.09 6.26L20 9.27l-5 3.64 1.91 6.09L12 17l-4.91 2.99L9 12.91 4 9.27l5.91-.01L12 2z"
          fill="url(#luminova-gradient)"
        />
      </svg>

      {/* Brand Text */}
      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Luminova
      </span>
    </div>
  );
};

export default Logo;
