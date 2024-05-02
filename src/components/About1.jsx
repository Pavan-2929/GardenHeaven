import React from "react";
import { RiPlantFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import aboutbg1 from "../assets/aboutbg1.jpeg";
import aboutbg2 from "../assets/aboutbg2.jpg";
import aboutbg3 from "../assets/aboutbg3.jpg";

const About1 = () => {
  return (
    <div className="my-14">
      <div className="grid grid-cols-3 text-white">
        <div
          style={{
            backgroundImage: `url(${aboutbg1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-green p-14 bg-opacity-80">
            <RiPlantFill className="w-10 h-10 mb-5" />
            <p className="italic py-2  font-semibold text-xl">Volunteer</p>
            <p className="font-bold text-3xl">
              To plant a garden is To Belive in Tomorrow
            </p>
            <p className="py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam
              error optio unde consequatur veniam nostrum voluptatum laborum
              voluptates impedit aut voluptate corporis, natus totam similique
              assumenda enim adipisci odit! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. A quam
            </p>
            <div className="flex items-center gap-2">
              <p>READ MORE</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${aboutbg2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-brown p-14 bg-opacity-80">
            <RiPlantFill className="w-10 h-10 mb-5" />
            <p className="italic py-2  font-semibold text-xl">Volunteer</p>
            <p className="font-bold text-3xl">
              To plant a garden is To Belive in Tomorrow
            </p>
            <p className="py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam
              error optio unde consequatur veniam nostrum voluptatum laborum
              voluptates impedit aut voluptate corporis, natus totam similique
              assumenda enim adipisci odit! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. A quam
            </p>
            <div className="flex items-center gap-2">
              <p>READ MORE</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${aboutbg3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-green p-14 bg-opacity-80">
            <RiPlantFill className="w-10 h-10 mb-5" />
            <p className="italic py-2  font-semibold text-xl">Volunteer</p>
            <p className="font-bold text-3xl">
              To plant a garden is To Belive in Tomorrow
            </p>
            <p className="py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam
              error optio unde consequatur veniam nostrum voluptatum laborum
              voluptates impedit aut voluptate corporis, natus totam similique
              assumenda enim adipisci odit! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. A quam
            </p>
            <div className="flex items-center gap-2">
              <p>READ MORE</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
