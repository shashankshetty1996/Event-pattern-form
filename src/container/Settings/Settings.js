import React, { useState, useContext } from "react";
import { unstable_batchedUpdates } from "react-dom";

import { AppContext } from "../../utils/Context";
import { Button, Input, Select } from "../../components";

import { getLocalStore, setLocalStore } from "../../utils/localStorage";

import "./Settings.scss";

export default function Settings() {
  const { input, setInput, options } = useContext(AppContext);
  const [newLabel, setNewLabel] = useState("");
  const [type, setType] = useState(options[0].value);

  const addNewLabel = () => {
    if (newLabel !== "") {
      if (input[newLabel] !== undefined) {
        return alert(`${newLabel} already exist`);
      }
      unstable_batchedUpdates(() => {
        setInput({ ...input, [newLabel]: { value: "", type } });
        setNewLabel("");
      });

      const config = getLocalStore();
      if (config) {
        config.input[newLabel] = { type };
        setLocalStore(config);
      } else {
        setLocalStore({ input: { [newLabel]: { type } } });
      }
    }
  };

  const deleteLabel = (label) => {
    const updateInput = { ...input };
    delete updateInput[label];
    setInput(updateInput);

    const config = getLocalStore();
    delete config.input[label];
    setLocalStore(config);
  };

  return (
    <div className="settings">
      <ul className="input-list">
        {Object.keys(input).map((label, index) => (
          <li key={index}>
            {label} <span onClick={() => deleteLabel(label)}>x</span>
          </li>
        ))}
      </ul>
      <div className="inline-form">
        <Select
          options={options}
          selectedValue={type}
          onChange={(option) => setType(option.value)}
        />
        <Input
          name="Add New label"
          value={newLabel}
          onChange={(value) => setNewLabel(value)}
        />
        <Button onClick={addNewLabel}>Add new label</Button>
      </div>
    </div>
  );
}
