import React, { useState, useEffect, useRef } from "react";

import { Forms, Settings } from "./container";
import { Header } from "./components";

import { AppContext } from "./utils/Context";
import { getLocalStore } from "./utils/localStorage";

import "./App.scss";

const options = [
  { label: "input", value: "input" },
  { label: "Paragraph", value: "textarea" },
];

function App() {
  const [input, setInput] = useState({});
  const [finalText, setFinalText] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const textAreaRef = useRef(null);

  // Fetch from local storage
  useEffect(() => {
    const configuration = getLocalStore() || { input: {} };
    setInput(() => {
      const res = { ...configuration.input };
      Object.keys((item) => (res[item]["value"] = ""));
      return res;
    });
  }, []);

  const inputChangeHandler = (value, name) =>
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: { ...prevInput[name], value },
      };
    });

  const resetForm = () => {
    const updatedInput = {};
    Object.keys(input).forEach((label) => {
      updatedInput[label] = { ...input[label], value: "" };
    });
    setInput(updatedInput);
  };

  const submitForm = () => {
    let text = "";
    Object.keys(input).forEach((label) => {
      const inputValue = input[label];
      if (inputValue !== "") {
        text = `${text}
*${label}* ${input[label]["value"]}`;
      }
    });
    setFinalText(text.trimStart());
  };

  const updateFileText = ($event) => setFinalText($event.target.value);

  const copyToClipboard = ($event) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    $event.target.focus();
  };

  const addNoFormat = () => {
    const text = `${finalText}
<noformat>

<noformat>`;
    setFinalText(text.trimStart());
  };

  const toggleSettings = () => setShowSettings((c) => !c);

  return (
    <AppContext.Provider
      value={{
        options,
        input,
        finalText,
        setInput,
        inputChangeHandler,
        resetForm,
        submitForm,
        updateFileText,
        setFinalText,
        copyToClipboard,
        addNoFormat,
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
