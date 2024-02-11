import React from "react";

const MapGoogle = (props) => {
  let content = {
    se: {
      h1: "Ekerö Kyrka",
      p: "Ekerö kyrkväg 5",
    },
    en: {
      h1: "Ekerö Kyrka",
      p: "Ekerö kyrkväg 5",
    },
  };
  props.language == "en" ? (content = content.en) : (content = content.se);
  return (
    <div className="w-full pb-28 text-center bg-gray-200" id="kyrka-map">
      <h1 className="text-5xl font-bold">{content.h1}</h1>
      <h1 className="text-lg mb-6">{content.p}</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.370173625161!2d17.747066406187628!3d59.272093380348295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f74a827a64a7f%3A0x6c384c6e39837335!2sEker%C3%B6%20kyrka!5e0!3m2!1ssv!2sse!4v1699660962534!5m2!1ssv!2sse"
        width="100%"
        height="500px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapGoogle;
