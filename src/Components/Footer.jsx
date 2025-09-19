import React from "react";
import Footer_grdient from "../assets/Pictures/Footer_grdient.png";
import Footer_bg from "../assets/Pictures/Footer_bg.png";
import Line from "../assets/Pictures/Line.png";
import ButtonBg from "./ButtonBg";
import Logo from "../assets/Pictures/Logo.png";
import Noise from "../assets/Pictures/Noise.png";

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
      <img
        src={Noise}
        alt="..."
        className="absolute w-[755px] left-1/2 -translate-x-1/2 z-0"
      />

      {/* Heading & CTA */}
      <div className="absolute top-71 z-10 flex flex-col items-center">
        <p
          className="text-center text-white text-[35px] font-[700]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Be part of the future of <br /> IdentityHub
        </p>
        <img className="mt-[-5px] ml-[-7px] w-[185px]" src={Line} alt="..." />

        <p
          className="text-center mt-4 text-white text-[15px] font-[300] w-[450px]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>

        <div className="mt-4">
          <ButtonBg text={"Start Free Trial"} />
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 text-white text-center mt-20 w-full flex flex-col justify-center">
        <div className="w-full text-[#CAD1E9] p-2 rounded-xl flex items-center justify-between px-6 mb-1">
          <div>
            <img className="w-[148px] h-[25px]" src={Logo} alt="..." />
          </div>
          <div className="flex items-center gap-8 text-[15px]">
            <a href="#">FEATURES</a>
            <a href="#">SERVICES</a>
            <a href="#">PRICING</a>
            <a href="#">HOW TO USE</a>
          </div>
        </div>
        <hr className="opacity-20" />
        <div className="w-full text-[#CAD1E9] mt-3 p-2 rounded-xl flex items-center justify-between px-6">
          <div>
            <p className="text-[15px]">
              © identityhub 2025. All rights reserved
            </p>
          </div>
          <div className="flex items-center gap-18">
            <a href="#">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="#">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i class="bi bi-telegram"></i>
            </a>
            <a href="#">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
