import React from "react";

import "./Button.scss";

export default function Button(props) {
  const { children, onClick, type = "" } = props;

  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
}
