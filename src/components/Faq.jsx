import React from "react";

const Faq = () => {
  let content = {
    se: [
      {
        question: "Kan man ta bilen till kyrkan?",
        answers: [
          "Då vi gemensamt åker båt från kyrkan till festlokalen rekommenderar vi att åka med bussen från Brommaplan. Det finns självklart parkering vid kyrkan och  mottagningen om man ändå vill ta bilen.",
          "Från kyrkan är det ca 15 bilfärd till festlokalen i Skytteholm.",
        ],
      },
      {
        question: "Finns alla hålltider samlade?",
        answers: [
          "Ett exakt schema för dagen kommer ni att få vid ankomst till kyrkan. Fram tills dess är det de tider vi skrivit ut nu som gäller. Se bara till att komma på bussen i tid, så löser sig resten!",
        ],
      },
      {
        question: "Går det att ta sig hem från festen utan bil under natten?",
        answers: [
          "Från Skytteholm rekommenderar vi att boka en taxi/Uber till Brommaplan och därifrån åka vidare kommunalt.",
        ],
      },
    ],
  };
  return (
    <section className="w-full py-16 px-5 text-lg">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
          FAQ
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-primary">
          {content.se.map((section, i) => (
            <details key={i}>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {section.question}
              </summary>
              {section.answers.map((answer, i) => (
                <div className="px-4 pb-4 space-y-2" key={i}>
                  <p>{answer}</p>
                </div>
              ))}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
