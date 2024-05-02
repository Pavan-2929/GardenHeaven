import React from 'react'
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const Details = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-14 py-20 h-auto">
        <div>
          <div className="text-center">
            <p className="text-green font-bold text-5xl">
              We need just a{" "}
              <span className="text-brown">Phone call from you....</span>
            </p>
            <p className="text-brown italic font-semibold mt-4 text-xl">
              Gardening at its best
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="text-center flex justify-center flex-col">
            <div className="flex justify-center">
              <PiClockCounterClockwiseLight className="text-6xl" />
            </div>
            <p className="font-bold py-3 text-xl text-brown ">
              Gardening Experts
            </p>
            <p className="text-slate w-[80%] mx-auto font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              suscipit vitae et?Lorem, ipsum.
            </p>
          </div>
          <div className="text-center flex justify-center flex-col">
            <div className="flex justify-center">
              <FaEarthAfrica className="text-6xl" />
            </div>
            <p className="font-bold py-3 text-xl text-brown ">
              Location specific
            </p>
            <p className="text-slate w-[80%] mx-auto font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              suscipit vitae et?Lorem, ipsum.
            </p>
          </div>
          <div className="text-center flex justify-center flex-col">
            <div className="flex justify-center">
              <FaRegCalendarAlt className="text-6xl" />
            </div>
            <p className="font-bold py-3 text-xl text-brown ">
              Online constitution
            </p>
            <p className="text-slate w-[80%] mx-auto font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              suscipit vitae et?Lorem, ipsum.
            </p>
          </div>
        </div>
        <div>
          <div className="mt-20 px-4 py-2 text-white flex justify-center font-bold gap-4">
            <button className="bg-green py-2 px-2 rounded">VIEW DEMO</button>
            <button className="bg-brown py-2 px-2 rounded" >PURCHASE THEME</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details