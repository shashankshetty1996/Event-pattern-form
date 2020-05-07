import React, { useState, useContext } from "react";
import { unstable_batchedUpdates } from "react-dom";

import { AppContext } from "../../utils/Context";
import { Button, Input } from "../../components";

import { getLocalStore, setLocalStore } from "../../utils/localStorage";

import "./Settings.scss";

export default function Settings() {
  const { input, setInput } = useContext(AppContext);
  const [newLabel, setNewLabel] = useState("");

  const addNewLabel = () => {
    if (newLabel !== "") {
      if (input[newLabel] !== undefined) {
        return alert(`${newLabel} already exist`);
      }
      unstable_batchedUpdates(() => {
        setInput({ ...input, [newLabel]: "" });
        setNewLabel("");
      });

      const config = getLocalStore();
      if (config) {
        config.input.push(newLabel);
        setLocalStore(config);
      } else {
        setLocalStore({ input: [newLabel] });
      }
    }
  };

  const deleteLabel = (label) => {
    const updateInput = { ...input };
    delete updateInput[label];
    setInput(updateInput);

    const config = getLocalStore();
    const updatedList = config.input.filter((item) => item !== label);
    config.input = updatedList;
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
