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
import Card_gradient from "../assets/Pictures/Card_gradient.png";
import Noise from "../assets/Pictures/Noise.png";

const Section1 = () => {
  return (
    <div className="container mx-auto ">
      <div className="relative bg-black p-4 flex flex-col items-center overflow-hidden">
        {/* ---------------- Background ---------------- */}
        <img
          src={Header_bg}
          alt="..."
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[950px] z-0 opacity-80"
        />
        <img
          src={Bg_grdient}
          alt="..."
          className="absolute top-30 left-1/2 -translate-x-1/2 w-[755px] z-0 opacity-50 blur-2xl"
        />
        <img
          src={Noise}
          alt="..."
          className="absolute w-[755px] top-60 left-1/2 -translate-x-1/2 z-0"
        />

        {/* ---------------- Content ---------------- */}
        {/* OTP Card */}
        <div className="absolute top-80 left-60">
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

        {/* Credit Card */}
        <div className="absolute top-155 left-70">
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

        {/* Phone Card */}
        <div className="absolute top-80 right-60">
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

        {/* Email Card */}
        <div className="absolute top-150 right-65">
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

        <div className="relative z-10 flex flex-col items-center">
          {/* Top Button */}
          <div className="shadow-lg shadow-white/20 rounded-xl mt-7">
            <Button text="Secure your data" size="sm" />
          </div>

          {/* Heading */}
          <h2
            className="text-center bg-clip-text text-transparent mt-5
                     bg-[linear-gradient(180deg,#F33CC0_13.43%,#4349FF_73.37%)] 
                     lg:text-[40px]  text-[20px] font-[600]"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Identity-hub is a better way to <br /> achieve privacy
          </h2>
          <img
            className="mt-[-10px] ml-[163px] w-[180px]"
            src={Line}
            alt="..."
          />

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
          <img className="mt-2 w-[370px]" src={Productivity} alt="..." />
        </div>

        <div className="mt-40 p-4 flex flex-col items-center overflow-hidden">
          {/* button */}
          <Button text={"Services"} size="sm" />
          {/* heading */}
          <p
            className="text-center text-[#CAD1E9] text-[30px] font-[500] mt-5"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            See our services for <br /> secure your{" "}
            <span
              className="text-center bg-clip-text text-transparent 
          bg-[linear-gradient(140deg,#F33CC0_13.43%,#4349FF_73.37%)] 
          text-[30px] font-[500]"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Data
            </span>{" "}
          </p>
          {/* paragraph */}
          <p
            className="text-center text-[#CAD1E9] mt-5 w-130"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Make your data invisible by generating unlimited identities. The
            next-level in privacy protection for online and travel.
          </p>
          {/* info cards 3 */}
          <div className="flex items-start mt-8 gap-4">
            {/* Personal Information removal */}
            <div className="flex-1 p-4 text-white rounded">
              <GlassCard className="relative overflow-hidden">
                {/* background gradient image */}
                <img
                  src={Card_gradient}
                  alt="background"
                  className="absolute inset-0 w-full h-full object-none opacity-60"
                />

                {/* content above bg */}
                <div className="relative z-10 p-4">
                  {/* small icon inside mini glass */}
                  <GlassCard className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] inline-flex items-center justify-center w-10 h-10">
                    <i className="bi bi-info-circle"></i>
                  </GlassCard>

                  {/* text */}
                  <p className="mt-5 text-[20px] font-[600]">
                    Personal Information <br /> removal
                  </p>
                  <p className="mt-5 w-[300px]">
                    Lets users quickly find answers to their questions without
                    having to search through multiple sources.
                  </p>
                  <p className="mt-5">
                    Explore More <i className="bi bi-caret-right-fill"></i>
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Cloaking Alias Profiles */}
            <div className="flex-1 p-4 text-white rounded">
              <GlassCard className="relative overflow-hidden">
                {/* background gradient image */}
                <img
                  src={Card_gradient}
                  alt="background"
                  className="absolute inset-0 w-full h-full object-none opacity-60"
                />

                {/* content above bg */}
                <div className="relative z-10 p-4">
                  {/* small icon inside mini glass */}
                  <GlassCard className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] inline-flex items-center justify-center w-10 h-10">
                    <i className="bi bi-info-circle"></i>
                  </GlassCard>

                  {/* text */}
                  <p className="mt-5 text-[20px] font-[600]">
                    Cloaking Alias <br /> Profiles
                  </p>
                  <p className="mt-5 w-[300px]">
                    Lets users quickly find answers to their questions without
                    having to search through multiple sources.
                  </p>
                  <p className="mt-5">
                    Explore More <i className="bi bi-caret-right-fill"></i>
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Virtual identities Security */}
            <div className="flex-1 p-4 text-white rounded">
              <GlassCard className="relative overflow-hidden">
                {/* background gradient image */}
                <img
                  src={Card_gradient}
                  alt="background"
                  className="absolute inset-0 w-full h-full object-none opacity-60"
                />

                {/* content above bg */}
                <div className="relative z-10 p-4">
                  {/* small icon inside mini glass */}
                  <GlassCard className="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] inline-flex items-center justify-center w-10 h-10">
                    <i className="bi bi-info-circle"></i>
                  </GlassCard>

                  {/* text */}
                  <p className="mt-5 text-[20px] font-[600]">
                    Virtual identities <br /> Security
                  </p>
                  <p className="mt-5 w-[300px]">
                    Lets users quickly find answers to their questions without
                    having to search through multiple sources.
                  </p>
                  <p className="mt-5">
                    Explore More <i className="bi bi-caret-right-fill"></i>
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
