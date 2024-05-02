import React from "react";
import FAQimage from "../assets/FAQimage.png";
import { FaLeaf } from "react-icons/fa";
import { MdPushPin } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { TbWheel } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa";
import { FaBug } from "react-icons/fa";

const FAQ = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${FAQimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[100vw] h-auto p-10 py-20"
    >
      <div className="flex justify-center mx-auto w-[60vw] items-center flex-wrap gap-8 gap-y-14">
        <div className="w-[25vw] flex gap-4">
          <div className="w-14 h-14 items-center flex justify-center p-4 bg-white rounded-full">
            <FaLeaf className="text-3xl " />
          </div>
          <div className="text-white">
            <p className="text-black font-bold text-lg">
              Eqipments & implements
            </p>
            <p className="text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              iusto exercitationem omnis expedita!
            </p>
          </div>
        </div>
        <div className="w-[25vw] flex gap-4">
          <div className="w-14 h-14 items-center flex justify-center p-4 bg-white rounded-full">
            <MdPushPin className="text-3xl " />
          </div>
          <div className="text-white">
            <p className="text-black font-bold text-lg">
              Manures & nutritients
            </p>
            <p className="text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              iusto exercitationem omnis expedita!
            </p>
          </div>
        </div>
        <div className="w-[25vw] flex gap-4">
          <div className="w-14 h-14 items-center flex justify-center p-4 bg-white rounded-full">
            <IoWater className="text-3xl " />
          </div>
          <div className="text-white">
            <p className="text-black font-bold text-lg">Macronutrients</p>
            <p className="text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              iusto exercitationem omnis expedita!
            </p>
          </div>
        </div>
        <div className="w-[25vw] flex gap-4">
          <div className="w-14 h-14 items-center flex justify-center p-4 bg-white rounded-full">
            <TbWheel className="text-3xl " />
          </div>
          <div className="text-white">
            <p className="text-black font-bold text-lg">Micronutrients</p>
            <p className="text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              iusto exercitationem omnis expedita!
            </p>
          </div>
        </div>
        <div className="w-[25vw] flex gap-4">
          <div className="w-14 h-14 items-center flex justify-center p-4 bg-white rounded-full">
            <FaPaintBrush className="text-3xl " />
          </div>
          <div className="text-white">
            <p className="text-black font-bold text-lg">Paste & weed control</p>
            <p className="text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              iusto exercitationem omnis expedita!
            </p>
          </div>
        </div>
        <div className="w-[25vw] flex gap-4">
          <div className="w-14 h-14 items-center flex justify-center p-4 bg-white rounded-full">
            <FaBug className="text-3xl " />
          </div>
          <div className="text-white">
            <p className="text-black font-bold text-lg">Maintenance</p>
            <p className="text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              iusto exercitationem omnis expedita!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
