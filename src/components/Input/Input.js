import React from "react";

import "./Input.scss";

export default function Input(props) {
  const { name, value, hint, placeholder, onChange } = props;

  const changeHandler = ($event) => {
    const { name: inputName, value: inputValue } = $event.target;
    onChange(inputValue, inputName);
  };

  return (
    <div className="input">
      <label>{name}:</label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
      />
      {hint !== "" && <span className="hint">{hint}</span>}
    </div>
  );
}
