import React from "react";

import "./Input.scss";

export default function Input(props) {
  const { name, value, onChange } = props;

  const changeHandler = ($event) => {
    const { name: inputName, value: inputValue } = $event.target;
    onChange(inputValue, inputName);
  };

  return (
    <div className="input">
      <label>{name}:</label>
      <input type="text" name={name} value={value} onChange={changeHandler} />
    </div>
  );
}
