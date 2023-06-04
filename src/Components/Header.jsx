import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { FaTwitter, FaChartLine } from "react-icons/fa";
import logo from "../assets/img1.png"

const Header = () => {
  return (
    <header className="py-3 w-full absolute bg-black text-white">
      <nav className="container flex  items-center">
        <div className="flex gap-3 items-center">
          <a href="" className="text-xl hover:text-primary" target="_blank">
            <TbBrandTelegram />
          </a>
          <a href="" className="text-xl hover:text-primary" target="_blank">
            <FaTwitter />
          </a>{" "}
          <a href="" className="text-xl hover:text-primary" target="_blank">
            <FaChartLine />
          </a>
        </div>
        <a href="" className="ml-auto font-bold flex items-center lg:mx-auto font-Maven_Pro text-3xl uppercase">mog <img src={logo} alt="" className="w-[3rem]" />l</a>
      </nav>
    </header>
  );
};

export default Header;
