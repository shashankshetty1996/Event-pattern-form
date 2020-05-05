import React from "react";

import "./Button.scss";

export default function Button(props) {
  const { children, onClick } = props;

  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
