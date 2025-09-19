import React from "react";
import Logo from "../assets/Pictures/Logo.png";
import Button from "./Button";

const NavBar = () => {
  return (
    <div>
      <div className="bg-black p-4 flex items-center justify-center">
        <div className="border border-white/10 w-[1175px] h-[50px] text-[#CAD1E9] p-2 rounded-xl flex items-center justify-between">
          <div>
            <img className="w-[148px] h-[25px]" src={Logo} alt="..." />
          </div>
          <div className="flex items-center gap-8">
            <div>
              <a href="#">Services</a>
            </div>
            <div>
              <a href="#">Features</a>
            </div>
            <div>
              <a href="#">Pricing</a>
            </div>
            <div>
              <a href="#">Partners</a>
            </div>
            <div>
              <a href="#">About us</a>
            </div>
          </div>

          <div>
            <Button
              text={"Start free trial"}
              icon={<i class="bi bi-caret-right-fill"></i>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
