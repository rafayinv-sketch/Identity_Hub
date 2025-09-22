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
      <img src={Footer_bg} alt="..." className="w-full max-w-[700px] z-0" />
      <img
        src={Footer_grdient}
        alt="..."
        className="w-full max-w-[800px] z-0 absolute opacity-70"
      />
      <img
        src={Noise}
        alt="..."
        className="absolute w-full max-w-[755px] left-1/2 -translate-x-1/2 z-0"
      />

      {/* Heading & CTA */}
      <div className="absolute top-32 md:top-63 z-10 flex flex-col items-center px-4 text-center">
        <p
          className="text-white text-2xl md:text-[35px] font-[700] leading-snug"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Be part of the future of <br /> IdentityHub
        </p>
        <img
          className="mt-[-5px] ml-[-7px] w-[150px] md:w-[185px]"
          src={Line}
          alt="..."
        />

        <p
          className="mt-4 text-white text-sm md:text-[15px] font-[300] max-w-[450px]"
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
      <div className="relative z-10 text-white mt-80 md:mt-96 w-full max-w-[1175px] flex flex-col gap-4 px-4">
        {/* Top row: logo + nav */}
        <div className="w-full text-[#CAD1E9] p-2 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <img
              className="w-[120px] md:w-[148px] h-auto"
              src={Logo}
              alt="..."
            />
          </div>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 text-sm md:text-[15px]">
            <a href="#">FEATURES</a>
            <a href="#">SERVICES</a>
            <a href="#">PRICING</a>
            <a href="#">HOW TO USE</a>
          </div>
        </div>

        <hr className="opacity-20" />

        {/* Bottom row: copyright + socials */}
        <div className="w-full text-[#CAD1E9] p-2 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-[15px] text-center md:text-left">
            © identityhub 2025. All rights reserved
          </p>
          <div className="flex justify-center md:justify-end items-center gap-6 md:gap-8 text-lg">
            <a href="https://x.com/">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://instagram.com/">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://telegram.com/">
              <i className="bi bi-telegram"></i>
            </a>
            <a href="https://facebook.com/">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://whatsapp.com/">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
