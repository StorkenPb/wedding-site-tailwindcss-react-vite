import React from "react";

const LanguageSwitsher = (props) => {
  return (
    <div
      className={
        props.language == "en"
          ? "w-full px-4 py-8 flex justify-center bg-gray-200 items-center"
          : "w-full px-4 py-8 flex justify-center items-center"
      }
    >
      <p className="pr-2 text-sm">Change language:</p>
      <select
        onChange={props.handleChange}
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        {props.options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitsher;
