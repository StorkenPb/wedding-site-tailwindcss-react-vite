import React, { useState } from "react";
import Hero from "./components/Hero";
import ImageText from "./components/ImageText";
import TextImage from "./components/TextImage";
import LanguageSwitsher from "./components/LanguageSwitsher";
import TextOnly from "./components/TextOnly";
import Cards from "./components/Cards";
import Toast from "./components/Toast";
import FormGoogle from "./components/FormGoogle";
import MapGoogle from "./components/MapGoogle";

const App = () => {
  var languages =
    navigator.languages[0] == ("en" || "en-us" || "en-US")
      ? ["en", "se"]
      : ["se", "en"];

  const [lang, setLanguage] = useState(languages[0]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <Hero language={lang} />
      <ImageText language={lang} />
      <TextImage language={lang} />
      <TextOnly language={lang} />
      <Cards language={lang} />
      <Toast language={lang} />
      <FormGoogle language={lang} />
      <MapGoogle language={lang} />
      <LanguageSwitsher
        options={languages}
        handleChange={handleLanguageChange}
      />
    </div>
  );
};

export default App;
