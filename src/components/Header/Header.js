import React, { useContext } from "react";
import { AppContext } from "../../utils/Context";

import "./Header.scss";

export default function Header(props) {
  const { toggleSettings } = useContext(AppContext);
  return (
    <div className="header">
      <h1>Customized Form</h1>
      <button onClick={toggleSettings}>Settings</button>
    </div>
  );
}
