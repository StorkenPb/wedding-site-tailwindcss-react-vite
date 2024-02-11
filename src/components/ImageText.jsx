import React, { useState } from "react";
import Church from "../assets/church.jpg";
import mapLarge from "../assets/brommaplan_map-bus-marker.jpg";

const ImageText = (props) => {
  let content = {
    se: {
      heading: "Vigsel Ekerö kyrka",
      paragraph_1:
        "Vigseln äger rum kl.15:00 i den gamla elvahundratalskyrkan på Ekerö.",
      subHeading: "Transport",
      paragraph_2:
        "Vid Brommaplan utmed Drottningholmsvägen väntar bussar från Bromma buss, med avfärd till kyrkan kl.14.00. Be there or be square! Till Brommaplan tar ni er lättast med tunnelbana eller buss.",
      buttonText: "Karta",
    },
    en: {
      heading: "Ceremony",
      paragraph_1:
        "The ceremony will take at 3 pm in the beautiful old 11th century church on Ekerö.",
      subHeading: "Transportation",
      paragraph_2:
        "Buses from Bromma Bus will be waiting at Brommaplan along Drottningholmsvägen. Departure time is 2pm. Be there or be square! The easiest way to get to Brommaplan is by metro or bus.",
      buttonText: "Map",
    },
  };

  props.language == "en" ? (content = content.en) : (content = content.se);

  const [mapOpen, setMap] = useState(false);

  const handleMap = () => {
    setMap(!mapOpen);
  };

  return (
    <>
      <div className="w-full py-16 px-5 text-lg">
        <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-2 flex items-center">
            <img
              src={Church}
              alt="/"
              className="rounded-2xl md:max-w-[450px] aspect-square object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col space-y-4">
              <h1 className="text-5xl font-bold">{content.heading}</h1>
              <p className="">{content.paragraph_1}</p>
              <a
                href="#kyrka-map"
                className="py-2 bg-primary w-[80px] text-white text-center font-medium tracking-wider rounded-lg drop-shadow-sm hover:underline "
              >
                {content.buttonText}
              </a>
              <h2 className="text-2xl font-robotoCondensed font-bold">
                {content.subHeading}
              </h2>
              <p>{content.paragraph_2}</p>
              <button
                className="py-2 bg-primary w-[80px] text-white font-medium tracking-wider rounded-lg drop-shadow-sm hover:underline"
                onClick={handleMap}
              >
                {content.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !mapOpen
            ? "hidden"
            : "fixed top-0 left-0 bottom-0 right-0 w-full h-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.6)] cursor-pointer z-10"
        }
        onClick={handleMap}
      >
        <img src={mapLarge} alt="/" className="" />
      </div>
    </>
  );
};

export default ImageText;
