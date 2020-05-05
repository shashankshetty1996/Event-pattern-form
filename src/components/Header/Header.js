import React from "react";

import "./Header.scss";

export default function Header(props) {
  const { onSettingsClicked } = props;
  return (
    <div className="header">
      <h1>Customized Form</h1>
      <button onClick={onSettingsClicked}>Settings</button>
    </div>
  );
}
