import React from "react";
import Button from "./Button";
import GlassCard from "./GlassCard";
import Slider1 from "../assets/Pictures/Slider1.png";
import Slider2 from "../assets/Pictures/Slider2.png";
import Slider3 from "../assets/Pictures/Slider3.png";
import Checkmark1 from "../assets/Pictures/Checkmark1.png";
import Checkmark2 from "../assets/Pictures/Checkmark2.png";
import Checkmark3 from "../assets/Pictures/Checkmark3.png";
import Sec2_card1 from "../assets/Pictures/Sec2_card1.png";
import User from "../assets/Pictures/User.png";
import User2 from "../assets/Pictures/User2.png";
import Call from "../assets/Pictures/Call.png";
import Credit from "../assets/Pictures/Credit.png";
import Email2 from "../assets/Pictures/Email2.png";
import Password from "../assets/Pictures/Password.png";
import Otp from "../assets/Pictures/Otp.png";
import Lock from "../assets/Pictures/Lock.png";
import Bg_grdient from "../assets/Pictures/Bg_grdient.png";
import Noise from "../assets/Pictures/Noise.png";

const Section2 = () => {
  return (
    <div className="relative bg-black p-4 flex flex-col items-center">
      {/* ---------------- Background ---------------- */}
      <img
        src={Bg_grdient}
        alt="background"
        className="absolute top-[155px] left-1/2 -translate-x-1/3 w-[755px] z-0 opacity-50 blur-2xl"
      />
      <img
        src={Noise}
        alt="noise"
        className="absolute w-[755px] top-60 left-1/2 -translate-x-1/2 z-0"
      />

      {/* button */}
      <Button text={"Features"} size="sm" />

      {/* heading */}
      <p className="text-center text-[#CAD1E9] text-[30px] font-[500] mt-5">
        Why{" "}
        <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#090EDB_13.43%,#E73DC4_73.37%)]">
          choose
        </span>{" "}
        us
      </p>

      {/* paragraph */}
      <p
        className="text-center text-[#CAD1E9] mt-5 max-w-[440px] mx-auto"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        We are the only service that provides all 3 services as a packaged
        service
      </p>

      {/* ================== Cards Container ================== */}
      <div className="relative w-full flex flex-col items-center">
        {/* Card 1 */}
        <div className="mx-auto w-full max-w-[1175px] text-white rounded mt-10 px-4">
          <GlassCard className="relative overflow-hidden w-full h-auto md:h-[450px] p-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 h-full">
              {/* Left */}
              <div className="flex flex-row sm:flex-row items-center sm:items-start gap-6">
                <img
                  className="h-[200px] md:h-[270px] object-contain"
                  src={Slider1}
                  alt="slider"
                />

                <div>
                  <p className="text-[22px] md:text-[25px] font-[600] text-center sm:text-left">
                    Protect Personal Information
                  </p>
                  <div className="w-full max-w-[430px] text-[14px] font-[400]">
                    {[
                      "The first step involves identifying all places where your personal information might be present.",
                      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
                      "Removing personal information is not a one-time task but requires ongoing vigilance.",
                      "There are professional services and tools available that specialise in personal information removal.",
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="ml-3 mt-5 flex flex-row justify-start"
                      >
                        <img className="w-4 h-4" src={Checkmark1} alt="check" />
                        <p className="ml-3">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="p-5">
                <img className="w-40 md:w-90" src={Sec2_card1} alt="sec1" />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Card 2 */}
        <div className="mx-auto w-full max-w-[1175px] text-white rounded mt-10 px-4">
          <GlassCard className="relative overflow-hidden w-full h-auto md:h-[450px] p-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 h-full">
              {/* Left */}
              <div className="flex flex-row sm:flex-row items-center sm:items-start gap-6">
                <img
                  className="h-[200px] md:h-[270px]"
                  src={Slider2}
                  alt="..."
                />
                <div>
                  <p className="text-[22px] md:text-[25px] font-[600] text-center sm:text-left">
                    Detailed Reporting
                  </p>
                  <div className="w-full max-w-[430px] text-[14px] font-[400]">
                    {[
                      "The first step involves identifying all places where your personal information might be present.",
                      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
                      "Removing personal information is not a one-time task but requires ongoing vigilance.",
                      "There are professional services and tools available that specialise in personal information removal.",
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="ml-3 mt-5 flex flex-row justify-start"
                      >
                        <img className="w-4 h-4" src={Checkmark2} alt="check" />
                        <p className="ml-3">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-3 w-full md:w-auto">
                {[
                  [
                    {
                      icon: User,
                      label: "Username",
                      value: "+1 (456) 453-3456",
                    },
                    {
                      icon: Call,
                      label: "Phone numbers",
                      value: "+1 (456) 453-3456",
                    },
                  ],
                  [
                    {
                      icon: Email2,
                      label: "Email address",
                      value: "+1 (456) 453-3456",
                    },
                    {
                      icon: Credit,
                      label: "Credit card",
                      value: "+1 (456) 453-3456",
                    },
                  ],
                  [
                    {
                      icon: Password,
                      label: "Password",
                      value: "+1 (456) 453-3456",
                    },
                    {
                      icon: Otp,
                      label: "OneTime passcode",
                      value: "Kas3345-r32",
                    },
                  ],
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row justify-center gap-5"
                  >
                    {row.map((item, j) => (
                      <GlassCard key={j}>
                        <div className="inline-flex gap-3 items-center p-2">
                          <GlassCard>
                            <img
                              className="w-[27px]"
                              src={item.icon}
                              alt={item.label}
                            />
                          </GlassCard>
                          <p>
                            {item.label} <br /> {item.value}
                          </p>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Card 3 */}
        <div className="mx-auto w-full max-w-[1175px] text-white rounded mt-10 px-4">
          <GlassCard className="relative overflow-hidden w-full h-auto md:h-[450px] p-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 h-full">
              {/* Left */}
              <div className="flex flex-row sm:flex-row items-center sm:items-start gap-6">
                <img
                  className="h-[200px] md:h-[270px]"
                  src={Slider3}
                  alt="..."
                />
                <div>
                  <p className="text-[22px] md:text-[25px] font-[600] mb-2 text-center sm:text-left">
                    Secure All Data
                  </p>
                  <div className="w-full max-w-[430px] text-[14px] font-[400]">
                    {[
                      "The first step involves identifying all places where your personal information might be present.",
                      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
                      "Removing personal information is not a one-time task but requires ongoing vigilance.",
                      "There are professional services and tools available that specialise in personal information removal.",
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="ml-3 mt-5 flex flex-row justify-start"
                      >
                        <img className="w-4 h-4" src={Checkmark3} alt="check" />
                        <p className="ml-3 mb-0">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex justify-center items-center relative">
                <img className="w-40 md:w-72" src={Lock} alt="Lock" />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute bottom-11 right-5 md:right-[170px] z-20">
              <GlassCard className="p-2">
                <div className="inline-flex gap-3 items-center">
                  <GlassCard className="p-1">
                    <img className="w-[27px]" src={Email2} alt="Email" />
                  </GlassCard>
                  <p className="mb-0">
                    Email address <br /> +1 (456) 453-3456
                  </p>
                </div>
              </GlassCard>
            </div>

            <div className="absolute bottom-48 right-5 md:right-[250px] z-20">
              <GlassCard className="p-2">
                <div className="inline-flex gap-3 items-center">
                  <GlassCard className="p-1">
                    <img className="w-[27px]" src={User2} alt="User" />
                  </GlassCard>
                  <p className="mb-0">
                    Username <br /> +1 (456) 453-3456
                  </p>
                </div>
              </GlassCard>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Section2;
