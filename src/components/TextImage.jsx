import React, { useState } from "react";
import Venue from "../assets/venue.jpg";
import mapLarge from "../assets/brommaplan_map-bus-marker.jpg";

const TextImage = (props) => {
  let content = {
    se: {
      heading: "Middag & fest",
      paragraph_1:
        "Efter vigseln beger vi oss vidare till Skytteholm där festen kommer att äga rum. Vi börjar med det bästa först, brudskål och tårta kl 17:30, följt av middag och fest.",
      subHeading: "Transport",
      paragraph_2:
        "Till Skytteholm tar vi oss tillsammans med båt från kyrkan. Vi njuter av utsikten över vacka Ekerö och dricker lite bubbel innan vi går i land.",
      paragraph_3:
        "Båten avgår kl 16:15 från Ekerö Kyrka och beräknas ta cirka 1 timme.",
      buttonText: "Karta",
    },
    en: {
      heading: "Dinner & party",
      paragraph_1:
        "After the ceremony, we will continue to Skytteholm, where the dinner and party will take place. Starting with the best part - the bridal toast (including cake) will begin at 5.30 pm, followed by dinner and dance.",
      subHeading: "Transportation",
      paragraph_2:
        "At the church a boat will be waiting to take all the guests to Skytteholm. We will enjoy the beautiful view of Ekerö while sipping bubbles before we arrive at Skytteholm.",
      buttonText: "Map",
    },
  };

  props.language == "en" ? (content = content.en) : (content = content.se);

  return (
    <div className="w-full py-16 px-5 text-lg">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row-reverse gap-16">
        <div className="flex-2 flex items-center">
          <img
            src={Venue}
            alt="/"
            className="rounded-2xl md:max-h-[420px] aspect-square object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col space-y-4">
            <h1 className="text-5xl font-bold">{content.heading}</h1>
            <p>{content.paragraph_1}</p>
            <h2 className="text-2xl font-robotoCondensed font-bold">
              {content.subHeading}
            </h2>
            <p>{content.paragraph_2}</p>
            <p>{content.paragraph_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
