import React from "react";

const Input = ({ type, placeholder, name, Update }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={() => Update(e.target.value)}
    />
  );
};

export default Input;
