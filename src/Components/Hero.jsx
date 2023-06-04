import React from "react";
import Line from "../assets/line.png";

const Hero = () => {
  return (
    <section className="py-[150px] w-full hero flex justify-center items-center ">
      <div className="container flex flex-col gap-5">
        <h1 className="text-9xl uppercase font-bold text-center">mongul</h1>
        <p className="text-3xl max-w-[700px] mx-auto text-center">
          an alien world-conqueror and the leader of Warworld. His brutal and
          merciless nature make him an enemy to Superman and a threat to the
          larger universe. His specialty is using the Black Mercy plants to
          incapacitate his opponents.
        </p>
        <div className="flex gap-5 justify-center items-center">
          <a href="" className="px-6 py-3 capitalize bg-purple-700">
            telegram
          </a>
          <a href="" className="px-6 py-3 capitalize bg-red-700">
            twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
