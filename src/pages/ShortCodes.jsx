import React from "react";
import { CiClock1 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineGppGood } from "react-icons/md";

const ShortCodes = () => {
  return (
    <div className="bg-wheat">
      <div className="max-w-7xl mx-auto px-14 py-20 h-auto">
        <div>
          <div className="text-center">
            <p className="text-green font-bold text-5xl">
              Get Things done <span className="text-brown">Right away</span>
            </p>
            <p className="text-brown italic font-semibold mt-4 text-xl">
              Why should to choose us?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-32">
          <div className="bg-white p-4 relative">
            <div className="flex items-center  justify-center mb-6">
              <CiClock1 className="absolute w-14 h-14 -top-8 bg-green p-2 rounded-full left-8 text-2xl text-white" />
            </div>
            <p className="font-semibold text-brown">Testimonials</p>
            <p className="font-bold text-xl py-4">
              Trained & Skilled professional
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              ad quidem, porro quas nostrum natus.
            </p>
          </div>
          <div className="bg-white p-4 relative">
            <div className="flex items-center  justify-center mb-6">
              <AiOutlineLike className="absolute w-14 h-14 -top-8 bg-green p-2 rounded-full left-8 text-2xl text-white" />
            </div>
            <p className="font-semibold text-brown">Pure from nature</p>
            <p className="font-bold text-xl py-4">Eco friendly solution</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              ad quidem, porro quas nostrum natus.
            </p>
          </div>
          <div className="bg-white p-4 relative">
            <div className="flex items-center  justify-center mb-6">
              <MdOutlineGppGood className="absolute w-14 h-14 -top-8 bg-green p-2 rounded-full left-8 text-2xl text-white" />
            </div>
            <p className="font-semibold text-brown">Testimonials</p>
            <p className="font-bold text-xl py-4">
              Trained & Skilled professional
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              ad quidem, porro quas nostrum natus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortCodes;
