import React, { useContext, forwardRef } from "react";
import { AppContext } from "../../utils/Context";

import { Button, Input, Textarea } from "../../components";

function Forms(props, ref) {
  const {
    input,
    finalText,
    inputChangeHandler,
    resetForm,
    submitForm,
    updateFileText,
    setFinalText,
    copyToClipboard,
    addNoFormat,
  } = useContext(AppContext);

  return (
    <div className="container form">
      <div className="left-section">
        <h1>Input Form</h1>
        {Object.keys(input).map((label, index) => {
          const { type, value } = input[label];
          if (type === "input") {
            return (
              <Input
                key={index}
                name={label}
                value={value}
                onChange={inputChangeHandler}
              />
            );
          }
          return (
            <Textarea
              key={index}
              name={label}
              value={value}
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
          ref={ref}
          value={finalText}
          onChange={updateFileText}
        ></textarea>
        <div className="button-group">
          <Button onClick={() => setFinalText("")}>Clear</Button>
          <Button onClick={addNoFormat}>Add noformat</Button>
          <Button onClick={copyToClipboard}>Copy to Clipboard</Button>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Forms);
