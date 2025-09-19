import React from "react";
import Bg_grdient from "../assets/Pictures/Bg_grdient.png";
import Button from "./Button";
import GlassCard from "./GlassCard";
import Checkmark2 from "../assets/Pictures/Checkmark2.png";
import ButtonBg from "./ButtonBg";
import Sec3_bg from "../assets/Pictures/Sec3_bg.png";

const Section3 = () => {
  return (
    <div className="bg-black p-4 flex flex-col items-center overflow-hidden relative">
      {/* ---------------- Background ---------------- */}
      <img
        src={Bg_grdient}
        alt="background"
        className="absolute top-[130px] left-1/2 -translate-x-1/2 w-[680px] z-0 opacity-50 blur-2xl"
      />
      <img
        className="absolute top-28 left-248 w-[250px]"
        src={Sec3_bg}
        alt="..."
      />
      <div className="flex flex-col items-center overflow-hidden relative mt-25">
        {/* Top Button */}
        <Button text="Pricing" size="sm" />
        {/* heading */}
        <p className="text-center text-[#CAD1E9] text-[30px] font-[500] mt-2">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(120deg,#090EDB_13.43%,#E73DC4_73.37%)]">
            Pricing
          </span>{" "}
          Package
        </p>

        {/* pricing cards */}

        <div className="flex justify-center items-center gap-4 p-4 mt-3">
          {/* card 1 */}
          <GlassCard className="p-5">
            <p className="text-[25px] font-[600]">Basic</p>
            <div className="w-[200px] mt-2">
              <p>AI chatbot, personalized recommendations</p>
            </div>
            <p className="mt-2 text-[25px] font-[600]">
              $ <span className="text-[35px] font-[700]">0</span>{" "}
            </p>
            <div className="flex justify-center">
              <Button text="Get Started" />
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Type of threat</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Online presence</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Access to all modules</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Notability</p>
            </div>
          </GlassCard>

          {/* card2 */}
          <GlassCard className="p-5">
            <p className="text-[25px] font-[600]">Premium</p>
            <div className="w-[300px] mt-2">
              <p>Advanced AI chatbot, priority support, analytics dashboard</p>
            </div>
            <p className="mt-2 text-[25px] font-[600]">
              $ <span className="text-[35px] font-[700]">9.99</span>{" "}
            </p>
            <div className="flex justify-center mt-2">
              <ButtonBg text="Get Started" />
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Type of threat</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Online presence</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Access to all modules</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Notability</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Optimize existing websites</p>
            </div>
          </GlassCard>

          {/* card3 */}
          <GlassCard className="p-5">
            <p className="text-[25px] font-[600]">Enterprise</p>
            <div className="w-[200px] mt-2">
              <p>AI chatbot, personalized recommendations</p>
            </div>
            <p className="mt-2 text-[25px] font-[600]">
              $ <span className="text-[35px] font-[700]">20.99</span>{" "}
            </p>
            <div className="flex justify-center mt-2">
              {" "}
              <Button text="Get Started" />
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Type of threat</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Online presence</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Access to all modules</p>
            </div>
            <div className="ml-3 mt-5 flex flex-row justify-start">
              <img className=" w-4 h-4" src={Checkmark2} alt="..." />
              <p className="ml-3">Notability</p>
            </div>
          </GlassCard>
        </div>
      </div>
      <div className="flex flex-col items-center overflow-hidden relative mt-25">
        {/* Top Button */}
        <Button className="mt-10" text="Testimonials" size="sm" />
        {/* heading */}
        <p className="text-center text-[#CAD1E9] text-[30px] font-[500] mt-2">
          What’s our user{" "}
          <span className="bg-clip-text text-transparent bg-[linear-gradient(120deg,#090EDB_13.43%,#E73DC4_73.37%)]">
            says
          </span>{" "}
          <br />
          about us
        </p>
      </div>
    </div>
  );
};

export default Section3;
