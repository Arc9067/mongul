import React from "react";
import logo  from '../assets/spa.png'

const Hero = () => {
  return (
    <section className="min-h-screen relative flex justify-center items-center bg-cover hero w-full ">
     <img src={logo} alt="" className="absolute w-[5rem] top-10 animate-bounce right-0"/>
      <div className="container text-center gap-3 flex flex-col justify-center items-center">
        <h2 className="text-2xl  font-Source_Sans_Pro font-bold">
          Welcome to Mongul
        </h2>
        <h1 className="text-5xl md:text-8xl head font-Maven_Pro font-bold uppercase text-primary">
          the mongul
        </h1>
        <p className="max-w-[800px] font-medium text-xl">
          His brutal and merciless nature make him an enemy to Superman and a
          threat to the larger universe. His specialty is using the Black Mercy
          plants to incapacitate his opponents. Eventually he was murdered by
          Neron during Underworld Unleashed.
        </p>

        <button className="flex font-Maven_Pro items-center gap-3">
          <a href="" className=" mavel  bg-white">
            buy now
          </a>
          <a href="" className=" mavel  bg-white">
            telegaram
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
