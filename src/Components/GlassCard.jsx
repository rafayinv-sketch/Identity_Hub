import React from "react";

const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-block rounded-xl p-2 
                  bg-white/10 
                  backdrop-blur-md 
                  border border-white/30 
                  shadow-lg shadow-[rgba(255,255,255,0.15)] 
                  text-[#CAD1E9] 
                  ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
