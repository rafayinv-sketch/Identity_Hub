import React from "react";

const ButtonBg = ({ text, icon, size = "md" }) => {
  const sizes = {
    sm: "py-1 px-3 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
  };

  return (
    <button
      className={`relative flex items-center rounded-xl 
                  bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] 
                  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
                  ${sizes[size]} text-[#CAD1E9] ${icon ? "gap-2" : ""}`}
    >
      <span className="relative z-10">{text}</span>
      {icon && <span className="relative z-10">{icon}</span>}
    </button>
  );
};

export default ButtonBg;
