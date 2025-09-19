import React from "react";
import Productivity from "../assets/Pictures/Productivity.png";
import Button from "./Button";
import ButtonBg from "./ButtonBg";
import Header_bg from "../assets/Pictures/Header_bg.png";
import Bg_grdient from "../assets/Pictures/Bg_grdient.png";
import GlassCard from "./GlassCard";
import Security_validation from "../assets/Pictures/Security_validation.png";
import Call from "../assets/Pictures/Call.png";
import Credit from "../assets/Pictures/Credit.png";
import Email from "../assets/Pictures/Email.png";
import Line from "../assets/Pictures/Line.png";

const Section1 = () => {
  return (
    <div className="relative bg-black p-4 flex flex-col items-center overflow-hidden">
      {/* ---------------- Background ---------------- */}
      <img
        src={Header_bg}
        alt="background"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[950px] z-0 opacity-80"
      />
      <img
        src={Bg_grdient}
        alt="background"
        className="absolute top-30 left-1/2 -translate-x-1/2 w-[755px] z-0 opacity-50 blur-2xl"
      />

      {/* ---------------- Content ---------------- */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Button */}
        <div className="shadow-lg shadow-white/20 rounded-xl mt-7">
          <Button text="Secure your data" size="sm" />
        </div>

        {/* Heading */}
        <p
          className="text-center bg-clip-text text-transparent mt-5
                     bg-[linear-gradient(180deg,#F33CC0_13.43%,#4349FF_73.37%)] 
                     text-[40px] font-[600]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Identity-hub is a better way to <br /> achieve privacy
        </p>
        <img className="mt-[-10px] ml-[163px] w-[180px]" src={Line} alt="..." />

        {/* Paragraph */}
        <p className="text-center text-[#CAD1E9] mt-3 w-140">
          Make your data invisible by generating unlimited identities. The
          next-level in privacy protection for online and travel.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-5 mt-5">
          <Button text={"Start free trial"} size="sm" />
          <ButtonBg text={"Use it now"} size="sm" />
        </div>

        {/* Center Image */}
        <img className="mt-10 w-[370px]" src={Productivity} alt="..." />

        {/* OTP Card */}
        <div>
          <GlassCard>
            <div className="inline-flex gap-3 justify-center items-center">
              <GlassCard>
                <img src={Security_validation} alt="OTP" />
              </GlassCard>
              <p>
                One-time passcode <br /> Kas3345-r32
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Phone Card */}
        <div>
          <GlassCard>
            <div className="inline-flex gap-3 justify-center items-center">
              <GlassCard>
                <img className="w-[27px]" src={Call} alt="Phone" />
              </GlassCard>
              <p>
                Phone numbers <br /> +1 (456) 453-3456
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Credit Card */}
        <div>
          <GlassCard>
            <div className="inline-flex gap-3 justify-center items-center">
              <GlassCard>
                <img src={Credit} alt="Credit Card" />
              </GlassCard>
              <p>
                Credit card <br /> 123 456 789 1243
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Email Card */}
        <div>
          <GlassCard>
            <div className="inline-flex gap-3 justify-center items-center">
              <GlassCard>
                <img src={Email} alt="Email" />
              </GlassCard>
              <p>
                Email address <br /> davidjx@gmail.com
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Section1;
