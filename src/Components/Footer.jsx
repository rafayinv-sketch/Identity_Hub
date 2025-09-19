import React from "react";
import Footer_grdient from "../assets/Pictures/Footer_grdient.png";
import Footer_bg from "../assets/Pictures/Footer_bg.png";
import Line from "../assets/Pictures/Line.png";

const Footer = () => {
  return (
    <div className="relative bg-black p-4 flex flex-col items-center overflow-hidden">
      {/* ---------------- Background ---------------- */}
      <img src={Footer_bg} alt="..." className="w-[700px] z-0" />
      <img
        src={Footer_grdient}
        alt="..."
        className="w-[800px] z-0 absolute opacity-70"
      />
      <div className="relative z-10 flex flex-col items-center bottom-105">
        {" "}
        {/* Heading */}
        <p
          className="text-center text-[#CAD1E9] text-[30px] font-[700]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Be part of the future of <br /> IdentityHub
        </p>
        <img className="mt-[-10px] ml-[163px] w-[180px]" src={Line} alt="..." />
      </div>

      {/* Example Footer Content */}
      <div className="relative z-10 text-white text-center mt-20">
        <p className="text-sm opacity-80">
          © 2025 My Website. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
