import React from "react";
import contentimage from "../assets/contactimage.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${contentimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[100vw] h-screen flex items-center pl-20"
    >
      <div className="w-[40vw] h-auto bg-brown p-10 opacity-95">
        <div className="border-b-2 border-yellow pb-2">
          <p className="text-yellow font-semibold">Satisfied</p>
          <p className="text-white text-3xl font-bold">
            Want our team to check your house?
          </p>
        </div>
        <div className="mt-12 flex gap-4 items-center">
          <FiPhoneCall className="text-4xl text-yellow" />
          <div>
            <p className="text-lg font-semibold text-yellow">Call us now</p>
            <p className="text-4xl font-bold text-white">113 334 443 221</p>
          </div>
        </div>
        <div className="bg-yellow text-white flex mt-8 rounded-sm px-4 font-bold text-sm p-3 w-fit items-center gap-4">
          <div className="border-r-2 border-gray-200 pr-4">OR CHAT WITH US</div>
          <div>
            <FiMessageSquare />
          </div>
        </div>
        <div className="text-white mt-6">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odit corrupti velit fugit odio quasi?</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
