import React from "react";
import gallary1 from "../assets/gallary1.jpg";
import gallary2 from "../assets/gallary2.jpeg";
import gallary3 from "../assets/gallary3.jpeg";
import gallary4 from "../assets/gallary4.jpeg";
import gallary5 from "../assets/gallary5.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Gallary = () => {
  return (
    <div className="max-w-7xl mx-auto py-14">
      <div className="grid grid-cols-3 gap-8 gap-y-12">
        <div className="w-[20vw]">
          <p className="text-green text-xl font-semibold pb-2">
            What's going on
          </p>
          <p className="text-slate font-bold text-2xl">Latest News & Updates</p>
          <p className="text-gray-500 py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            inventore blanditiis odit explicabo aut odio, repudiandae, aperiam
            voluptatum ad adipisci numquam
          </p>
          <button className="text-green bg-white border-green border-2 px-4 py-2 rounded-sm">
            READ MORE
          </button>
        </div>
        <div className="w-[20vw]">
          <img src={gallary1} alt="" />
          <p className="text-xl text-brown font-bold py-2">
            The Walk-behind Lawnmower For Trimming....
          </p>
          <p className="text-gray-500 my-3">
            Jan 18, 2015, <span className="text-brown">IN:Buisness</span>{" "}
          </p>
          <div className="flex gap-4 itmes-center">
            <div className="flex items-center my-auto border-t-2 w-full border-black"></div>
            <div className="flex items-center font-semibold text-sm">
              <p className="mr-1 flex">READ</p>
              <p className="mr-2">MORE</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="w-[20vw]">
          <img src={gallary1} alt="" />
          <p className="text-xl text-brown font-bold py-2">
            The Walk-behind Lawnmower For Trimming....
          </p>
          <p className="text-gray-500 my-3">
            Jan 18, 2015, <span className="text-brown">IN:Buisness</span>{" "}
          </p>
          <div className="flex gap-4 itmes-center">
            <div className="flex items-center my-auto border-t-2 w-full border-black"></div>
            <div className="flex items-center font-semibold text-sm">
              <p className="mr-1 flex">READ</p>
              <p className="mr-2">MORE</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="w-[20vw]">
          <img src={gallary1} alt="" />
          <p className="text-xl text-brown font-bold py-2">
            The Walk-behind Lawnmower For Trimming....
          </p>
          <p className="text-gray-500 my-3">
            Jan 18, 2015, <span className="text-brown">IN:Buisness</span>{" "}
          </p>
          <div className="flex gap-4 itmes-center">
            <div className="flex items-center my-auto border-t-2 w-full border-black"></div>
            <div className="flex items-center font-semibold text-sm">
              <p className="mr-1 flex">READ</p>
              <p className="mr-2">MORE</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="w-[20vw]">
          <img src={gallary1} alt="" />
          <p className="text-xl text-brown font-bold py-2">
            The Walk-behind Lawnmower For Trimming....
          </p>
          <p className="text-gray-500 my-3">
            Jan 18, 2015, <span className="text-brown">IN:Buisness</span>{" "}
          </p>
          <div className="flex gap-4 itmes-center">
            <div className="flex items-center my-auto border-t-2 w-full border-black"></div>
            <div className="flex items-center font-semibold text-sm">
              <p className="mr-1 flex">READ</p>
              <p className="mr-2">MORE</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="w-[20vw]">
          <img src={gallary1} alt="" />
          <p className="text-xl text-brown font-bold py-2">
            The Walk-behind Lawnmower For Trimming....
          </p>
          <p className="text-gray-500 my-3">
            Jan 18, 2015, <span className="text-brown">IN:Buisness</span>{" "}
          </p>
          <div className="flex gap-4 itmes-center">
            <div className="flex items-center my-auto border-t-2 w-full border-black"></div>
            <div className="flex items-center font-semibold text-sm">
              <p className="mr-1 flex">READ</p>
              <p className="mr-2">MORE</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
