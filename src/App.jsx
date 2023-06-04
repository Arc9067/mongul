import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="min-h-screen relative w-full font-primary text-3xl bg-black text-white">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
