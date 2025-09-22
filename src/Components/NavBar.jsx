import React from "react";
import Logo from "../assets/Pictures/Logo.png";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="bg-black p-4 flex justify-center">
      <div className="border border-white/10 w-full max-w-[1175px] text-[#CAD1E9] px-4 py-3 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div>
          <img className="w-[148px] h-[25px]" src={Logo} alt="logo" />
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row items-center gap-6 text-sm font-medium">
          <a href="#">Services</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Partners</a>
          <a href="#">About us</a>
        </div>

        {/* Button */}
        <div>
          <Button
            text="Start free trial"
            icon={<i className="bi bi-caret-right-fill"></i>}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
