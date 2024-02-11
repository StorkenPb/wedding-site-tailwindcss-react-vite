import React from "react";

const TextOnly = (props) => {
  let content = {
    se: {
      heading_1: "Boende",
      paragraph_1:
        "Hotellrum på Skytteholm finns tillgängligt för samtliga gäster. Då festen fortsätter sent in på natten hoppas vi att ni vill och har möjlighet att stanna till dagen efter.",
      paragraph_2:
        "I samband med att ni OSA:r väljer ni om ni vill boka hotellrum (1850 kr för ett dubbelrum). Vi ordnar med det administrativa.",
      heading_2: "Dagen efter",
      paragraph_3:
        "Dagen efter avslutas firandet och vi återställer oss med en brunch i restaurangen på Skytteholm. Brunchen börjar kl.10.00.",
      paragraph_4:
        "Kl. 12.15 står Bromma buss redo att kör samtliga gäster tillbaka till Brommaplan.",
    },
    en: {
      heading_1: "Accommodation",
      paragraph_1:
        "Hotel rooms at Skytteholm are available for all guests. As the party continues late into the night, we hope that you want to and are able stay until the next day.",
      paragraph_2:
        "When you RSVP, you choose whether you want to book a hotel room (1850 SEK for a double room). We will take care of the administration.",
      heading_2: "The day after (Sunday)",
      paragraph_3:
        "The following day, the celebration ends with a recovery brunch at the restaurant. The brunch starts at 10 am.",
      paragraph_4:
        "At 12.15 pm Bromma will take all guests back to Brommaplan.",
    },
  };

  props.language == "en" ? (content = content.en) : (content = content.se);

  return (
    <div className="w-full py-16 px-5 text-lg">
      <div className="max-w-[1080px] mx-auto flex flex-col">
        <div className="flex-1">
          <div className="flex flex-col space-y-4">
            <h1 className="text-5xl font-bold">{content.heading_1}</h1>
            <p>{content.paragraph_1}</p>
            <p>{content.paragraph_2}</p>
            <h1 className="text-5xl font-bold">{content.heading_2}</h1>
            <p>{content.paragraph_3}</p>
            <p>{content.paragraph_4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextOnly;
