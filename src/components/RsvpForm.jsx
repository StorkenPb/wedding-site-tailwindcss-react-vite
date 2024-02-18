import React, { useState } from "react";

const RsvpForm = (props) => {
  let content = {
    se: {
      rsvp: "O.S.A",
      endDate: "Senast sista Mars.",
      guest: "Gäst ",
      enterName: "Fullt namn",
      vegDiet: "Önskar vegetarisk kost",
      addGuest: "Lägg till gäst",
      stayTheNight: "Önskas övernattning?",
      bed2: "Ja - Ett rum",
      bed2Helper: "Alla rum har två sängar och kostar 1850:-",
      bed3: "Ja - Ett rum med extra säng",
      bed3Helper: "350:- Extra",
      bed0: "Nej",
      allergies: "Allergier",
      allergiesPlaceholder: "Skriv om du är allergisk mot någon mat?",
      additional: "Övrigt",
      additionalPlaceholder: "Tex. om vem du delar rum med.",
      submit: "Skicka",
    },
    en: {
      rsvp: "RSVP",
      endDate: "We need your answer by March 31.",
      guest: "Guest ",
      enterName: "Enter full name",
      vegDiet: "Vegetarian diet",
      addGuest: "Add guest",
      stayTheNight: "I wish to stay the night",
      bed2: "Yes - one double room",
      bed2Helper: "All rooms have two beds and costs $180",
      bed3: "Yes - with an additional bed",
      bed3Helper: "$35 Extra",
      bed0: "No",
      allergies: "Food allergies?",
      allergiesPlaceholder: "Enter allergies here",
      additional: "Additional information",
      additionalPlaceholder: "e.g. with whom you share a room",
      submit: "Submit",
    },
  };
  props.language == "en" ? (content = content.en) : (content = content.se);

  const [guests, setGuests] = useState([
    { name: "", room: "", veg_diet: "", foodAllergies: "", additional: "" },
  ]);

  const handleChange = (e, i) => {
    const field = e.target.name;
    var newGuests = [...guests];
    field == "room"
      ? (newGuests[i][field] = e.target.id)
      : (newGuests[i][field] = e.target.value);
    setGuests(newGuests);
  };

  const handleAddGuest = () => {
    setGuests([...guests, { name: "", veg_diet: "" }]);
  };

  const handleRemoveGuest = (i) => {
    const newGuests = [...guests];
    newGuests.splice(i, 1);
    setGuests(newGuests);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(guests);
  };

  return (
    <div className="text-lg text-left">
      <h1 className="text-4xl font-bold">{content.rsvp}</h1>
      <p className="text-sm">{content.endDate}</p>
      <form
        onSubmit={handleSubmit}
        className="text-gray-600 flex flex-col space-y-6"
      >
        {guests.map((guest, index) => (
          <div key={index} className="bg-white rounded-md p-4 mt-6 space-y-4">
            <legend className="block">
              {content.guest} {index + 1}
            </legend>
            <div className="flex">
              <input
                className="border-2 border-gray-200 flex-1 rounded-md py-2 px-3"
                type="text"
                placeholder={content.enterName}
                name="name"
                value={guest.name}
                onChange={(e) => handleChange(e, index)}
                required
              />
              {index == 0 ? (
                ""
              ) : (
                <button
                  onClick={() => handleRemoveGuest(index)}
                  className="ml-4"
                >
                  ❌
                </button>
              )}
            </div>
            <div className="flex">
              <input
                type="checkbox"
                name="veg_diet"
                id={index}
                onChange={(e) => handleChange(e, index)}
                className="w-4"
              />
              <label htmlFor={index} className="ml-4">
                {content.vegDiet}
              </label>
            </div>
          </div>
        ))}
        <button
          className="py-2 bg-white w-[200px] font-medium tracking-wider rounded-lg drop-shadow-sm hover:underline"
          onClick={handleAddGuest}
        >
          ➕ {content.addGuest}
        </button>
        <fieldset className="bg-white rounded-md p-4 space-y-1">
          <label className="">
            <span>{content.stayTheNight}</span>
          </label>

          <div className="flex">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="room"
                id="bed-2"
                className="w-4 h-4"
                required
                onChange={(e) => handleChange(e, 0)}
              />
            </div>
            <div className="ml-4">
              <label htmlFor="bed-2">{content.bed2}</label>
              <p
                id="helper-bed-2"
                className="text-xs font-normal text-gray-500"
              >
                {content.bed2Helper}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                name="room"
                id="bed-3"
                className="w-4 h-4"
                onChange={(e) => handleChange(e, 0)}
              />
            </div>
            <div className="ml-4">
              <label htmlFor="bed-3">{content.bed3}</label>
              <p
                id="helper-bed-3"
                className="text-xs font-normal text-gray-500"
              >
                {content.bed3Helper}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              name="room"
              id="bed-0"
              className="w-4 h-4"
              onChange={(e) => handleChange(e, 0)}
            />
            <label htmlFor="bed-0">{content.bed0}</label>
          </div>
        </fieldset>
        <div className="bg-white rounded-md p-4 mt-6 space-y-1">
          <legend className="block">{content.allergies}</legend>
          <input
            className="border-2 border-gray-200 w-[80%] rounded-md py-1 px-3"
            type="text"
            placeholder={content.allergiesPlaceholder}
            name="foodAllergies"
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <div className="bg-white rounded-md p-4 mt-6 space-y-1">
          <legend className="block">{content.additional}</legend>
          <input
            className="border-2 border-gray-200 w-[80%] rounded-md py-1 px-3"
            type="text"
            placeholder={content.additionalPlaceholder}
            name="additional"
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <button
          className="py-2 mb-8 bg-primary w-[100px] text-white font-medium tracking-wider rounded-lg drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400 hover:underline "
          type="submit"
        >
          {content.submit}
        </button>
      </form>
    </div>
  );
};

export default RsvpForm;
