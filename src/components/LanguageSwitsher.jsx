import React, { useState } from "react";

const LanguageSwitsher = (props) => {
  return (
    <div className="fixed top-2 right-2">
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