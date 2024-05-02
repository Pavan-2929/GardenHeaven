import React from "react";
import AboutDesign from "../helpers/AboutDesign";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpeg";
import about4 from "../assets/about4.jpeg";
import About1 from "../components/About1";

const About = () => {
  return (
    <div className="w-[100vw] h-screen">
      <div className="p-14 flex">
        <div className="max-w-[45vw]">
          <p className="text-brown font-semibold text-xl">
            we only saw the seeds!
          </p>
          <p className="text-slate font-bold text-4xl py-2">
            Create your Garden of Eden @home!{" "}
          </p>
          <p className="text-gray-400 pt-3 w-[40vw]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            eaque excepturi voluptatem. Minima obcaecati id, ipsum ipsa
            voluptatibus tenetur accusantium consectetur, aperiam eos
            consequuntur aliquam laudantium voluptatum? Dolorum, laboriosam
            illo!
          </p>
          <div className="grid grid-cols-2 mt-10">
            <div className="w-[15vw] mb-8">
              <AboutDesign number={1} />
              <p className="font-bold text-lg py-2">Planning Your Garden</p>
              <p className="text-sm text-brown">
                $35 for a team of 3 expert gardenrs
              </p>
            </div>
            <div className="w-[15vw] mb-8">
              <AboutDesign number={2} />
              <p className="font-bold text-lg py-2">Designing the Landscapes</p>
              <p className="text-sm text-brown">
                $25 for a team of 3 expert gardenrs
              </p>
            </div>
            <div className="w-[15vw] mb-8">
              <AboutDesign number={3} />
              <p className="font-bold text-lg py-2">The Driveway & Lawn</p>
              <p className="text-sm text-brown">
                Landscaping & garden designprice per project
              </p>
            </div>
            <div className="w-[15vw] mb-8">
              <AboutDesign number={4} />
              <p className="font-bold text-lg py-2">Walkaway by the Poolside</p>
              <p className="text-sm text-brown">
                Landscaping & garden designprice per project
              </p>
            </div>
          </div>
          <div>
            <button className="bg-green text-white px-4 py-2 rounded-sm">
              VIEW ALL SERVICES
            </button>
          </div>
        </div>
        <div className="w-[55vw] flex justify-center gap-14">
          <div className="flex flex-col gap-8">
            <img src={about1} className="w-80" alt="" />
            <img src={about2} className="w-80" alt="" />
          </div>
          <div className="flex flex-col gap-14 mt-24">
            <img src={about3} className="w-80" alt="" />
            <img src={about4} className="w-80" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
