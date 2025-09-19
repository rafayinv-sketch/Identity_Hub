import React from "react";
import Button from "./Button";
import GlassCard from "./GlassCard";
import Card_gradient from "../assets/Pictures/Card_gradient.png";
import Slider from "../assets/Pictures/Slider.png";
const Section3 = () => {
  return (
    <div className="bg-black p-4 flex flex-col items-center overflow-hidden">
      {/* button */}
      <Button text={"Features"} size="sm" />
      {/* heading */}
      <p
        className="text-center text-[#CAD1E9] text-[30px] font-[500] mt-5"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        Why{" "}
        <span
          className="text-center bg-clip-text text-transparent 
          bg-[linear-gradient(90deg,#090EDB_13.43%,#E73DC4_73.37%)] 
          text-[30px] font-[500]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          choose
        </span>{" "}
        us
      </p>
      {/* paragraph */}
      <p
        className="text-center text-[#CAD1E9] mt-5 w-110"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        We are the only service that provides all 3 services as a packaged
        service
      </p>
      <div>
        {/* Card */}
        <div className="w-[1175px] px-4 text-white rounded mt-10">
          <GlassCard className="relative overflow-hidden w-full p-5">
            {/* background gradient image */}
            <img
              src={Card_gradient}
              alt="background"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div>
              {" "}
              <div className="flex flex-row items-center">
                {/* content above bg */}
                <img className="h-[270px]" src={Slider} alt="..." />
                <div className="ml-[30px]">
                  <p className="text-[25px] font-[600]">
                    Protect Personal information
                  </p>
                  <div className="w-[430px] text-[14px] font-[400]">
                    <p className="ml-5 mt-5">
                      <i class="bi bi-check2-circle"></i> The first step
                      involves identifying all places where your personal
                      information might be present.
                    </p>
                    <p className="ml-5 mt-5">
                      <i class="bi bi-check2-circle"></i> Once you've identified
                      where your information is held, the next step is to
                      contact the administrators of this platform
                    </p>
                    <p className="ml-5 mt-5">
                      <i class="bi bi-check2-circle"></i> Removing personal
                      information is not a one-time task but requires ongoing
                      vigilance.
                    </p>
                    <p className="ml-5 mt-5">
                      <i class="bi bi-check2-circle"></i> There are professional
                      services and tools available that specialise in personal
                      information removal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Section3;
