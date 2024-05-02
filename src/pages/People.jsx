import React from "react";
import people1 from "../assets/people1.jpeg";
import people2 from "../assets/people2.jpeg";
import people3 from "../assets/people3.jpeg";
import people4 from "../assets/people4.jpeg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const People = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-14 py-14 h-auto">
        <div>
          <div className="text-center">
            <p className="text-green font-bold text-5xl">
              Transform your home{" "}
              <span className="text-brown">to zen garden!</span>
            </p>
            <p className="text-brown font-semibold mt-4 text-xl">
              These are the services we offer to you
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-14 mt-14">
          <div className="shadow-2xl">
            <div className="text-center h-[300px]">
              <img
                src={people1}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center p-4">
              <p className="text-slate font-bold text-xl pt-4 pb-2">
                Lumber Jackman
              </p>
              <p className="text-brown font-semibold">Gardenist</p>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="text-center h-[300px]">
              <img
                src={people2}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center p-4">
              <p className="text-slate font-bold text-xl pt-4 pb-2">
                Lumber Jackman
              </p>
              <p className="text-brown font-semibold">Gardenist</p>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="text-center h-[300px]">
              <img
                src={people3}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center p-4">
              <p className="text-slate font-bold text-xl pt-4 pb-2">
                Lumber Jackman
              </p>
              <p className="text-brown font-semibold">Gardenist</p>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="text-center h-[300px]">
              <img
                src={people4}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center p-4">
              <p className="text-slate font-bold text-xl pt-4 pb-2">
                Lumber Jackman
              </p>
              <p className="text-brown font-semibold">Gardenist</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 gap-4 text-white">
            <div className="p-4 bg-green rounded-full">
                <FaArrowLeft />
            </div>
            <div className="p-4 bg-green rounded-full">
                <FaArrowRight />
            </div>
        </div>
      </div>
    </div>
  );
};

export default People;
