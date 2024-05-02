import React from "react";
import services1 from "../assets/services1.jpg";
import services2 from "../assets/services2.jpeg";
import services3 from "../assets/services3.jpeg";
import services4 from "../assets/services4.jpeg";

const Services = () => {
  return (
    <div className="bg-wheat">
      <div className="max-w-7xl mx-auto px-14 py-14 h-auto">
        <div>
          <div className="text-center">
            <p className="text-green font-bold text-5xl">
              Transform your home{" "}
              <span className="text-brown">to zen garden!</span>
            </p>
            <p className="text-brown font-semibold mt-4 text-xl">
              There are the service we own to you
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-8">
          <div className="bg-white text-center pb-8">
            <img src={services1} alt="" />
            <p className="font-semibold py-4 text-brown">Outdoor Scraping</p>
            <p className="font-bold text-xl pb-4">
              The best walk behing lawn mowers
            </p>
            <button className="bg-brown  text-white px-4 py-2 rounded-sm">
              View Services
            </button>
          </div>
          <div className="bg-white text-center pb-8">
            <img src={services1} alt="" />
            <p className="font-semibold py-4 text-brown">Outdoor Scraping</p>
            <p className="font-bold text-xl pb-4">
              The best walk behing lawn mowers
            </p>
            <button className="bg-brown  text-white px-4 py-2 rounded-sm">
              View Services
            </button>
          </div>
          <div className="bg-white text-center pb-8">
            <img src={services1} alt="" />
            <p className="font-semibold py-4 text-brown">Outdoor Scraping</p>
            <p className="font-bold text-xl pb-4">
              The best walk behing lawn mowers
            </p>
            <button className="bg-brown  text-white px-4 py-2 rounded-sm">
              View Services
            </button>
          </div>
          <div className="bg-white text-center pb-8">
            <img src={services1} alt="" />
            <p className="font-semibold py-4 text-brown">Outdoor Scraping</p>
            <p className="font-bold text-xl pb-4">
              The best walk behing lawn mowers
            </p>
            <button className="bg-brown  text-white px-4 py-2 rounded-sm">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
