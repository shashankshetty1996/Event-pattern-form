import React, { useState, useEffect, useRef } from "react";

import { Settings } from "./container";
import { Button, Header, Input } from "./components";

import { getLocalStore } from "./utils/localStorage";

import "./App.scss";

function App() {
  const [input, setInput] = useState({});
  const [finalText, setFinalText] = useState("");
  const [showSettings, setShowSettings] = useState(true);

  const textAreaRef = useRef(null);

  // Fetch from local storage
  useEffect(() => {
    const configuration = getLocalStore() || { input: [] };
    setInput(() => {
      const res = {};
      configuration.input.forEach((label) => (res[label] = ""));
      return res;
    });
  }, []);

  const inputChangeHandler = (value, name) =>
    setInput({ ...input, [name]: value });

  const resetForm = () => {
    const updatedInput = {};
    Object.keys(input).forEach((label) => (updatedInput[label] = ""));
    setInput(updatedInput);
  };

  const submitForm = () => {
    let text = "";
    Object.keys(input).forEach((label) => {
      const inputValue = input[label];
      if (inputValue !== "") {
        text += `*${label}* ${input[label]} | `;
      }
    });
    setFinalText(text);
  };

  const updateFileText = ($event) => setFinalText($event.target.value);

  const copyToClipboard = ($event) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    $event.target.focus();
  };

  return (
    <div className="App">
      <Header onSettingsClicked={() => setShowSettings((c) => !c)} />
      {showSettings && <Settings input={input} setInput={setInput} />}
      <div className="container">
        <div className="left-section">
          <h1>Input Form</h1>
          {Object.keys(input).map((label, index) => {
            return (
              <Input
                key={index}
                name={label}
                value={input[label]}
                onChange={inputChangeHandler}
              />
            );
          })}
          <div className="button-group">
            <Button onClick={resetForm}>Reset</Button>
            <Button onClick={submitForm}>Submit</Button>
          </div>
        </div>
        <div className="right-section">
          <textarea
            ref={textAreaRef}
            value={finalText}
            onChange={updateFileText}
          ></textarea>
          <div className="button-group">
            <Button onClick={() => setFinalText("")}>Clear</Button>
            <Button onClick={copyToClipboard}>Copy to Clipboard</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
