import React from "react";

const Button = ({ text, icon, size = "md" }) => {
  const sizes = {
    sm: "py-1 px-3 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
  };

  return (
    <button className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#090EDB] to-[#8D1EA2]">
      <span
        className={`relative flex items-center rounded-xl bg-black overflow-hidden ${
          sizes[size]
        } text-[#CAD1E9] ${icon ? "gap-2" : ""}`}
      >
        <span className="relative z-10">{text}</span>
        {icon && <span className="relative z-10">{icon}</span>}
      </span>
    </button>
  );
};

export default Button;
