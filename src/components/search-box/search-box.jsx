import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange, value, type }) => {
  return (
    <input
      className="search"
      onChange={handleChange}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};
