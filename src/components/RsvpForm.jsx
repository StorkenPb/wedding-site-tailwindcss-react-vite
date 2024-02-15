import React, { useState } from "react";

const RsvpForm = () => {
  const [guests, setGuests] = useState([{ name: "", label: "" }]);

  const handleAddGuest = () => {
    setGuests([...guests, { name: "", label: "" }]);
  };

  const handleRemoveGuest = (i) => {
    const newGuests = [...guests];
    newGuests.splice(i, 1);
    setGuests(newGuests);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    setGuests();
  };

  return (
    <div className="w-full py-16 px-5 text-lg">
      <div className="max-w-[1080px] mx-auto">
        <form onSubmit={handleSubmit} className="block ">
          <div className="flex flex-col space-y-2">
            {guests.map((guest, index) => (
              <div key={index}>
                <input type="text" placeholder="My Name" name="name" required />
                <button onClick={handleRemoveGuest(index)}>Remove</button>
              </div>
            ))}
            <button
              className="py-2 bg-primary w-[200px] text-white font-medium tracking-wider rounded-lg drop-shadow-sm hover:underline"
              onClick={handleAddGuest}
            >
              Add Guest
            </button>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RsvpForm;
