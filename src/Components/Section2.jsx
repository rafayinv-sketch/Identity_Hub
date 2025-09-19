import React from "react";
import Button from "./Button";
import GlassCard from "./GlassCard";
import Card_gradient from "../assets/Pictures/Card_gradient.png";

const Section2 = () => {
  return (
    <div className="bg-black p-4 flex flex-col items-center overflow-hidden">
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
  );
};

export default Section2;
