import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import gallray5 from "../assets/gallary5.jpg"

const Footer = () => {
  return (
    <div className="bg-brown text-white p-8">
      <div className="flex gap-10 pb-4 border-b-2 border-gray-400">
        <div className="w-[40%]">
          <ul className="flex gap-2 text-sm text-gray-300">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>NEWS</li>
            <li>GALLARY</li>
            <li>SHORTCODES</li>
          </ul>
          <p className="text-2xl font-bold mt-6 text-gray-300">
            SUBSCRIBE TP NEWSSLETTER
          </p>
          <p className="pb-6 pt-8">
            If you have garden, you have everything in thiw world....a world of
            your own, to plant and grow... not only plants but ypur sole!
          </p>
          <div className="flex justify-between font-semibold pb-2 border-b-2 border-gray-400">
            <p className="text-gray-300">Enter email</p>
            <p>SUBSCRIBING</p>
          </div>
        </div>
        <div className="w-[30%] text-gray-300">
          <p className="text-white pb-4 text-3xl">Contact Info</p>
          <p className="pb-1">121 king street, Melibrone </p>
          <p className="pb-1">vicotry, 3000 Australia</p>
          <p className="pb-1">+61 38376 62845</p>
          <p className="pb-1">Email@email.com</p>
          <p className="pb-8">Skype skype</p>
          <p>www.downloadnewthemes.com</p>
        </div>
        <div>
          <div className="flex justify-end gap-6">
            <FaFacebookF />
            <FaTwitter />
            <FaGooglePlusG />
          </div>
          <div>
            <p className="text-3xl pt-8 pb-4">Photo Stream</p>
            <div className="grid grid-cols-3 gap-8">
              <img src={gallray5} className="w-16" alt="" />
              <img src={gallray5} className="w-16" alt="" />
              <img src={gallray5} className="w-16" alt="" />
              <img src={gallray5} className="w-16" alt="" />
              <img src={gallray5} className="w-16" alt="" />
              <img src={gallray5} className="w-16" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <p className="text-gray-300 capitalize">2016 GARDEN TEMPLATE BY DESIGNMENTS ALL RIGHTS RESERVED</p>
        <div className="display flex gap-6">
            <p className="border-r-2 border-gray-400 pr-6">Payment Terms</p>
            <p>Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
