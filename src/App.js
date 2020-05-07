import React, { useState, useEffect, useRef } from "react";

import { Forms, Settings } from "./container";
import { Header } from "./components";

import { getLocalStore } from "./utils/localStorage";

import "./App.scss";
import { AppContext } from "./utils/Context";

function App() {
  const [input, setInput] = useState({});
  const [finalText, setFinalText] = useState("");
  const [showSettings, setShowSettings] = useState(false);

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

  const toggleSettings = () => setShowSettings((c) => !c);

  return (
    <AppContext.Provider
      value={{
        input,
        finalText,
        setInput,
        inputChangeHandler,
        resetForm,
        submitForm,
        updateFileText,
        setFinalText,
        copyToClipboard,
        toggleSettings,
      }}
    >
      <div className="App">
        <Header />
        {showSettings && <Settings />}
        <Forms ref={textAreaRef} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
