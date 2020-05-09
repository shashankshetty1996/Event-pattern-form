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

  const inputSubmit = ($event) => {
    $event.preventDefault();
    submitForm();
  };

  return (
    <div className="container form">
      <div className="left-section">
        <form onSubmit={inputSubmit}>
          <h1>Input Form</h1>
          {Object.keys(input).map((label, index) => {
            const { type, value, hint = "" } = input[label];
            if (type === "input") {
              return (
                <Input
                  key={index}
                  name={label}
                  value={value}
                  hint={hint}
                  onChange={inputChangeHandler}
                />
              );
            }
            return (
              <Textarea
                key={index}
                name={label}
                value={value}
                hint={hint}
                onChange={inputChangeHandler}
              />
            );
          })}
          <div className="button-group">
            <Button type="reset" onClick={resetForm}>
              Reset
            </Button>
            <Button type="submit" onClick={submitForm}>
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="right-section">
        <textarea
          ref={ref}
          value={finalText}
          onChange={updateFileText}
        ></textarea>
        <div className="button-group">
          <Button type="reset" onClick={() => setFinalText("")}>
            Clear
          </Button>
          <Button onClick={addNoFormat}>Add noformat</Button>
          <Button type="submit" onClick={copyToClipboard}>
            Copy to Clipboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Forms);
