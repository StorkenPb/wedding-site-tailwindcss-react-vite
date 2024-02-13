import React from "react";

const Toast = (props) => {
  let content = {
    se: {
      h1: "Vill du hålla tal?",
      p: "Hör av er till våra fantastiska toastmasters, Julia och Hugo!",
    },
    en: {
      h1: "Do you want to give a speech?",
      p: "Get in touch with our fantastic toastmasters, Julia and Hugo!",
    },
  };
  props.language == "en" ? (content = content.en) : (content = content.se);

  return (
    <div className="w-full py-16 px-5 text-lg">
      <div className="max-w-[1080px] mx-auto flex flex-col text-center items-center gap-5">
        <h1 className="text-5xl font-bold">{content.h1}</h1>
        <p className="text-2xl max-w-[390px]">{content.p}</p>
        <a
          href="mailto:julia.c.weingarten@gmail.com"
          className="inline-flex justify-center gap-x-1.5 rounded-md py-2 px-4 bg-primary text-white font-medium tracking-wider drop-shadow-sm hover:underline "
        >
          ✉️ julia.c.weingarten@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Toast;
