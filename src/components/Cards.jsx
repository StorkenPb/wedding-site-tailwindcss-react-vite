import React from "react";
import DresscodeImg from "../assets/clothes.jpg";
import ChildrenImg from "../assets/children.webp";
import GiftsImg from "../assets/gifts.webp";

const Cards = (props) => {
  let content = {
    se: [
      {
        img: DresscodeImg,
        h1: "Klädsel",
        p1: "Sommarkavaj.",
        p2: "Läs mer",
        toolTip:
          "Sommarkavaj är ett sätt att ange klädkoden kavaj men indikera att man inte vill att gästerna ska komma i mörka plagg såsom exempelvis svarta kostymer och klänningar, utan klä sig mer “sommrigt” enligt betydelsen ovan.",
      },
      {
        img: ChildrenImg,
        h1: "Barn",
        p1: "Barn är välkomna på vigseln. Det går bra att boka ett extra rum för barn och eventuell barnvakt. Meddela i så fall oss så hjälper vi er.",
      },
      {
        img: GiftsImg,
        h1: "Present",
        p1: "Vi vill så gärna fira denna helg med er alla och som present önskar vi oss därför att de som har möjlighet väljer att stanna över natten.",
      },
    ],
    en: [
      {
        img: DresscodeImg,
        h1: "Dress code",
        p1: "Semi-Formal Summer suit.",
        p2: "Read more",
        toolTip:
          'Summer suit is a way of indicating the dress code for suit, but indicating that you don\'t want guests to come in dark clothes such as black suits and dresses, but to dress more "summer style" as defined above.',
      },
      {
        img: ChildrenImg,
        h1: "Children",
        p1: "Children are welcome at the ceremony. For our American friends, the kids are welcome to join at the dinner, but we can also arrange a room for the kids next to the dinner venue. Let us know and we will help you.",
      },
      {
        img: GiftsImg,
        h1: "Gifts",
        p1: "We would love to celebrate this weekend with you all and as a gift we would like those who are able to stay overnight.",
      },
    ],
  };

  props.language == "en" ? (content = content.en) : (content = content.se);

  return (
    <div className="w-full py-16 px-5 text-lg">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row gap-16 md:gap-8 lg:gap-16">
        {content.map((card) => (
          <div key={card.h1} className="flex flex-col flex-1">
            <img
              src={card.img}
              alt=""
              className="rounded-2xl aspect-[7/5] object-cover"
            />
            <h1 className="py-4 text-3xl font-bold">{card.h1}</h1>
            <p>{card.p1}</p>
            {card.p2 ? (
              <div className="group">
                <p className="underline">{card.p2}</p>
                <p className="group-hover:opacity-100 transition-opacity p-2 my-1 bg-primary text-sm text-gray-100 rounded-lg opacity-0">
                  {card.toolTip}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
