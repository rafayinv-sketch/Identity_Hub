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

const Section2 = () => {
  return (
    <div className="relative bg-black p-4 flex flex-col items-center">
      {/* ---------------- Background ---------------- */}
      <img
        src={Bg_grdient}
        alt="background"
        className="absolute top-[155px] left-1/2 -translate-x-1/3 w-[755px] z-0 opacity-50 blur-2xl"
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
        className="text-center text-[#CAD1E9] mt-5 w-110"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        We are the only service that provides all 3 services as a packaged
        service
      </p>

      <div className="relative w-full flex flex-col items-center">
        {/* Card 1 */}
        <div className="w-[1175px] px-4 text-white rounded mt-10 ">
          <GlassCard className="relative overflow-hidden w-full p-5">
            <div>
              {" "}
              <div className="flex flex-row items-center p-5">
                {/* content above bg */}
                <img className="h-[270px]" src={Slider1} alt="..." />
                <div className="ml-[30px]">
                  <p className="text-[25px] font-[600]">
                    Protect Personal information
                  </p>
                  <div className="w-[430px] text-[14px] font-[400]">
                    <div className="ml-3 mt-5 flex flex-row justify-start">
                      <img className=" w-4 h-4" src={Checkmark1} alt="..." />
                      <p className="ml-3">
                        The first step involves identifying all places where
                        your personal information might be present.
                      </p>
                    </div>
                    <div className="ml-3 mt-5 flex flex-row justify-start">
                      <img className=" w-4 h-4" src={Checkmark1} alt="..." />
                      <p className="ml-3">
                        Once you've identified where your information is held,
                        the next step is to contact the administrators of this
                        platform
                      </p>
                    </div>
                    <div className="ml-3 mt-5 flex flex-row justify-start">
                      <img className=" w-4 h-4" src={Checkmark1} alt="..." />
                      <p className="ml-3">
                        Removing personal information is not a one-time task but
                        requires ongoing vigilance.
                      </p>
                    </div>
                    <div className="ml-3 mt-5 flex flex-row justify-start">
                      <img className=" w-4 h-4" src={Checkmark1} alt="..." />
                      <p className="ml-3">
                        There are professional services and tools available that
                        specialise in personal information removal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img className="w-90 ml-50" src={Sec2_card1} alt="..." />
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        {/* Card 1 */}

        {/* Card 2 */}
        <div className="w-[1175px] px-4 text-white rounded mt-10">
          <GlassCard className="relative overflow-hidden w-full p-5">
            <div>
              {" "}
              <div className="flex flex-row items-center p-5 ">
                {/* content above bg */}
                <img className="h-[270px]" src={Slider2} alt="..." />
                <div className="ml-[30px]">
                  <p className="text-[25px] font-[600]">Detailed Reporting</p>
                  <div className="w-[430px] text-[14px] font-[400]">
                    <div className="ml-3 mt-5 flex flex-row justify-start">
                      <img className=" w-4 h-4" src={Checkmark2} alt="..." />
                      <p className="ml-3">
                        The first step involves identifying all places where
                        your personal information might be present.
                      </p>
                    </div>
                    <div className="ml-3 mt-5 flex flex-row justify-start">
                      <img className=" w-4 h-4" src={Checkmark2} alt="..." />
                      <p className="ml-3">
                        Once you've identified where your information is held,
                        the next step is to contact the administrators of this
                        platform
                      </p>
                    </div>
                    <div className="ml-3 mt-5 flex flex-row justify-start">
                      <img className=" w-4 h-4" src={Checkmark2} alt="..." />
                      <p className="ml-3">
                        Removing personal information is not a one-time task but
                        requires ongoing vigilance.
                      </p>
                    </div>
                    <div className="ml-3 mt-5 flex flex-row justify-start">
                      <img className=" w-4 h-4" src={Checkmark2} alt="..." />
                      <p className="ml-3">
                        There are professional services and tools available that
                        specialise in personal information removal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-[87px] w-180">
                  <div className="flex flex-row justify-center gap-[77px]">
                    {" "}
                    {/* username Card */}
                    <div className="">
                      <GlassCard>
                        <div className="inline-flex gap-3 justify-center items-center">
                          <GlassCard>
                            <img className="w-[27px]" src={User} alt="OTP" />
                          </GlassCard>
                          <p>
                            Username <br /> +1 (456) 453-3456
                          </p>
                        </div>
                      </GlassCard>
                    </div>
                    {/* username Card */}
                    {/* phone number Card */}
                    <div className="">
                      <GlassCard>
                        <div className="inline-flex gap-3 justify-center items-center">
                          <GlassCard>
                            <img className="w-[27px]" src={Call} alt="OTP" />
                          </GlassCard>
                          <p>
                            Phone numbers <br /> +1 (456) 453-3456
                          </p>
                        </div>
                      </GlassCard>
                    </div>
                    {/* phone number Card */}
                  </div>

                  <div className="flex flex-row justify-between mt-3">
                    {/* Email address Card */}
                    <div className="">
                      <GlassCard>
                        <div className="inline-flex gap-3 justify-center items-center">
                          <GlassCard>
                            <img className="w-[27px]" src={Email2} alt="OTP" />
                          </GlassCard>
                          <p>
                            Email address <br /> +1 (456) 453-3456
                          </p>
                        </div>
                      </GlassCard>
                    </div>
                    {/* Email address Card */}
                    {/* Credit card Card */}
                    <div className="">
                      <GlassCard>
                        <div className="inline-flex gap-3 justify-center items-center">
                          <GlassCard>
                            <img src={Credit} alt="OTP" />
                          </GlassCard>
                          <p>
                            Credit card <br /> +1 (456) 453-3456
                          </p>
                        </div>
                      </GlassCard>
                    </div>
                    {/* Credit card Card */}
                  </div>

                  <div className="flex flex-row justify-between mt-3">
                    {/* Password Card */}
                    <div className="">
                      <GlassCard>
                        <div className="inline-flex gap-3 justify-center items-center">
                          <GlassCard>
                            <img
                              className="w-[27px]"
                              src={Password}
                              alt="OTP"
                            />
                          </GlassCard>
                          <p>
                            Password <br /> +1 (456) 453-3456
                          </p>
                        </div>
                      </GlassCard>
                    </div>
                    {/* Password Card */}
                    {/* OTP Card */}
                    <div className="">
                      <GlassCard>
                        <div className="inline-flex gap-3 justify-center items-center">
                          <GlassCard>
                            <img className="w-[27px]" src={Otp} alt="OTP" />
                          </GlassCard>
                          <p>
                            OneTime passcode <br /> Kas3345-r32
                          </p>
                        </div>
                      </GlassCard>
                    </div>
                    {/* OTP Card */}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        {/* Card 2 */}

        {/* Card 3 */}
        <div className="w-[1175px] px-4 text-white rounded mt-10">
          <GlassCard className="relative overflow-hidden w-full p-0">
            <div className="flex flex-row items-center p-5 relative z-10">
              {/* Main Image */}
              <img className="h-[270px]" src={Slider3} alt="..." />

              {/* Content */}
              <div className="ml-[30px]">
                <p className="text-[25px] font-[600] mb-2">Secure All Data</p>
                <div className="w-[430px] text-[14px] font-[400]">
                  <div className="ml-3 mt-5 flex flex-row justify-start">
                    <img className=" w-4 h-4" src={Checkmark3} alt="..." />
                    <p className="ml-3 mb-0">
                      The first step involves identifying all places where your
                      personal information might be present.
                    </p>
                  </div>
                  <div className="ml-3 mt-5 flex flex-row justify-start">
                    <img className=" w-4 h-4" src={Checkmark3} alt="..." />
                    <p className="ml-3 mb-0">
                      Once you've identified where your information is held, the
                      next step is to contact the administrators of this
                      platform
                    </p>
                  </div>
                  <div className="ml-3 mt-5 flex flex-row justify-start">
                    <img className=" w-4 h-4" src={Checkmark3} alt="..." />
                    <p className="ml-3 mb-0">
                      Removing personal information is not a one-time task but
                      requires ongoing vigilance.
                    </p>
                  </div>
                  <div className="ml-3 mt-5 flex flex-row justify-start">
                    <img className=" w-4 h-4" src={Checkmark3} alt="..." />
                    <p className="ml-3 mb-0">
                      There are professional services and tools available that
                      specialise in personal information removal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lock Image */}
              <div className="flex justify-center items-center relative ml-83">
                <img className="w-60" src={Lock} alt="..." />
              </div>
            </div>

            {/* Email Card - absolutely positioned */}
            <div className="absolute bottom-5 right-[170px] z-20">
              <GlassCard className="p-2">
                <div className="inline-flex gap-3 justify-center items-center">
                  <GlassCard className="p-1">
                    <img className="w-[27px]" src={Email2} alt="Email" />
                  </GlassCard>
                  <p className="mb-0">
                    Email address <br /> +1 (456) 453-3456
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Username Card - absolutely positioned */}
            <div className="absolute bottom-30 right-[250px] z-20">
              <GlassCard className="p-2">
                <div className="inline-flex gap-3 justify-center items-center">
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
        {/* Card 3 */}
      </div>
    </div>
  );
};

export default Section2;
