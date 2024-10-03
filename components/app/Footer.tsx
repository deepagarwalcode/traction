import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center gap-[12vw] w-[80vw] mx-auto pb-12 border-b-2 border-gray-700">
        <p className="font-medium text-xl flex-1 ">
          You're one decision away from exploding your leads list.
        </p>
        <div className="flex-1 flex gap-4 flex-col">
          <p className="text-2xl font-bold mb-2">Company</p>
          <p className="text-lg font-medium">About Us</p>
          <p className="text-lg font-medium">Integrations</p>
          <p className="text-lg font-medium">Contact</p>
        </div>
        <div className="flex-1 flex gap-4 flex-col">
          <p className="text-2xl font-bold mb-2">Resources</p>
          <p className="text-lg font-medium">Blog</p>
          <p className="text-lg font-medium">Demo</p>
          <p className="text-lg font-medium">LinkedIn</p>
        </div>
      </div>
      <div className="w-[80vw] mx-auto pt-12 pb-12 flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-black bg-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-primary transition hover:text-white">
            <Twitter />
          </div>
          <div className="text-black bg-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-primary transition hover:text-white">
            <Linkedin />
          </div>
          <div className="text-black bg-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:bg-primary transition hover:text-white">
            <Instagram />
          </div>
        </div>
        <p className="text-gray-400 font-bold text-xl">Copyright 2024 © Traction</p>
      </div>
    </div>
  );
};

export default Footer;
