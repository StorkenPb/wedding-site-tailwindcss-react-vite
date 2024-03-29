import React from "react";

const FormGoogle = (props) => {
  let content = {
    se: {
      h1: "O.S.A",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSe_j6Rxk-fUCFqzoDNwYtMP2b8qnbs2ds6eQsmujRbNUcornQ/viewform?embedded=true",
    },
    en: {
      h1: "R.S.V.P",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSe2_Czv9sil2IMnuWjkGcDWodAvJ4ENRyemc2pfVZUj5UikcQ/viewform?embedded=true",
    },
  };

  props.language == "en" ? (content = content.en) : (content = content.se);

  return (
    <div className="w-full py-16 text-center bg-gray-200" id="rsvp">
      <h1 className="text-5xl font-bold mb-6">{content.h1}</h1>
      <iframe src={content.formUrl} width="100%" height="1578" loading="lazy">
        Loading rsvp form…
      </iframe>
    </div>
  );
};

export default FormGoogle;
