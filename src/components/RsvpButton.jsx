import React from "react";

const RsvpButton = (props) => {
  let content = {
    se: { rsvp: "OSA Här" },
    en: { rsvp: "RSVP" },
  };
  props.language == "en" ? (content = content.en) : (content = content.se);
  return (
    <div>
      <a className="fixed top-[70dvh] right-2" href="#rsvp">
        <div className="py-2 w-20 md:w-28 bg-white font-medium text-center border-2 border-gray-300 rounded-lg drop-shadow-lg hover:underline">
          {content.rsvp}
        </div>
      </a>
    </div>
  );
};

export default RsvpButton;
