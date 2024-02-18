import React, { useState, useEffect } from "react";
import RsvpForm from "./RsvpForm";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MapGoogle from "./MapGoogle";
import FormGoogle from "./FormGoogle";

const RsvpButton = (props) => {
  let content = {
    se: { rsvp: "OSA Här" },
    en: { rsvp: "RSVP" },
  };
  props.language == "en" ? (content = content.en) : (content = content.se);

  const [formOpen, setForm] = useState(false);

  const handleForm = () => {
    setForm(!formOpen);
  };

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (formOpen) {
      html.classList.add("lock-scroll");
    } else {
      html.classList.remove("lock-scroll");
    }
    return () => {
      html.classList.remove("lock-scroll");
    };
  }, [formOpen]);

  return (
    <div className="max-w-[1080px] mx-auto p-4 text-center">
      <button
        className="py-4 bg-primary w-[400px] max-w-[100%] text-white font-medium tracking-wider rounded-lg drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400 hover:underline"
        onClick={handleForm}
      >
        {content.rsvp}
      </button>
      <div
        className={
          formOpen
            ? "fixed top-0 right-0 left-0 bottom-0 bg-[#000] opacity-75 z-20"
            : "hidden"
        }
        onClick={handleForm}
      ></div>
      <div
        className={
          formOpen
            ? "fixed top-0 right-0 h-dvh p-6 pb-8 min-w-[100%] md:min-w-[60%] bg-gray-100 border-l border-gray-300 overflow-scroll z-50 ease-in-out duration-300"
            : "fixed top-0 right-[-100%] h-dvh min-w-[100%] md:min-w-[60%]"
        }
      >
        <FormGoogle language={props.language} />
        {/*<RsvpForm language={props.language} />*/}
        <div
          onClick={handleForm}
          className="fixed md:absolute top-0 right-0 p-4 md:p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          {formOpen ? <AiOutlineClose size={32} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default RsvpButton;
