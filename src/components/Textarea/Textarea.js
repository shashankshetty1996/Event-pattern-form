import React from "react";

import "./Textarea.scss";

export default function Textarea(props) {
  const { name, value, hint, onChange } = props;

  const changeHandler = ($event) => {
    const { name: textAreaName, value: textAreaValue } = $event.target;
    onChange(textAreaValue, textAreaName);
  };

  return (
    <div className="textarea">
      <label>{name}:</label>
      <textarea name={name} value={value} onChange={changeHandler} />
      {hint !== "" && <span className="hint">{hint}</span>}
    </div>
  );
}
