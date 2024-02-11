import React from "react";
import BgImage from "../assets/sunflowers.webp";

const Hero = (props) => {
  let content = {
    se: {
      heading_1: "Sophia & Christoffer",
      p1: "Ekerö kyrka",
      p2: "14:e September 2024",
    },
    en: {
      heading_1: "Sophia & Christoffer",
      p1: "Ekerö kyrka",
      p2: "September 14'th 2024",
    },
  };

  props.language == "en" ? (content = content.en) : (content = content.se);

  return (
    <div
      className="h-[80vh] bg-cover flex flex-col items-center justify-center text-center space-y-1 bg-gradient-to-t from-cyan-500 to-blue-500"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${BgImage})`,
      }}
    >
      <h1 className="text-7xl my-4 font-bold font-robotoCondensed text-white">
        {content.heading_1}
      </h1>
      <p className="text-2xl text-white font-medium">{content.p1}</p>
      <p className="text-2xl text-white font-medium">{content.p2}</p>
    </div>
  );
};

export default Hero;
