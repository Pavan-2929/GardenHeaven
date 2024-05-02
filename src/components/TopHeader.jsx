import React from "react";
import { FaInfo } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="flex justify-between px-24 items-center h-[6vh] border border-gray-200">
      <div className="flex items-center gap-1 font-semibold">
        <FaInfo className="text-green"/>
        <p className="text-green">info@greenheaven.com</p>
      </div>
      <div className="flex">
        <div className="flex text-green gap-4 items-center">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG className="text-2xl"/>
        </div>
        <div className="px-6 border-x-2 border-gray-700 mx-10 text-green font-semibold">Get a Quote</div>
        <div className="flex items-center text-green gap-1 font-semibold">
          <FaPhone />
          <p>+91 32983 32392</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
