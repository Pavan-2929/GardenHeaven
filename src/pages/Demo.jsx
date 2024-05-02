import React from "react";
import profilepic from "../assets/profilepic.jpg"
import demoimage from "../assets/demoimage.png"

const Demo = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="flex items-center">
        <div className="w-[50%]">
          <p className="text-brown font-semibold pb-1 text-xl">Testimonilas</p>
          <p className="text-3xl text-slate font-bold pb-10">What People Say</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            earum illum delectus expedita doloribus sequi ipsam harum maxime
            laudantium, dicta quam quibusdam corrupti, inventore ipsa.
          </p>
          <div className="flex items-center mt-10 gap-2">
            <img src={profilepic} className="w-14 rounded-full" alt="" />
            <div className="text-lg font-semibold">
              <p className="text-brown">Frank Bob</p>
              <p className="text-slate">Gardenist</p>
            </div>
          </div>
        </div>
        <div className="w-[60%]">
            <img src={demoimage} className="h-96 w-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
