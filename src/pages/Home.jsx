import React from "react";
import HomeImage from "../assets/HomeImage.jpg";

const Home = () => {
  return (
    <div
      className="h-[84vh] w-screen bg-cover"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      <div className="pt-24 pl-32">
        <div className="w-[35vw] h-auto bg-white py-14 px-8 bg-opacity-80  ">
          <p className="text-slate text-xl font-bold">A Dream Golden House</p>
          <p className="text-4xl font-bold text-slate py-3 pr-14">
            MAKE YOUR HOME LOOK LIVELY
          </p>
          <p className="text-slate font-semibold">
            with the best gardens and garden eqipments create a green dream home
            with our eyes of expertize at affordable price
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-green text-white py-2 px-3 rounded-sm font-semibold">LEARN MORE</button>
            <button className="bg-slate text-white py-2 px-3 rounded-sm font-semibold">ASK QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
