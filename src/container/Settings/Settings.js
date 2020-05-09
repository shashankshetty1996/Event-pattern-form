import React, { useState, useContext } from "react";
import { unstable_batchedUpdates } from "react-dom";

import { AppContext } from "../../utils/Context";
import { Button, Input, Select } from "../../components";

import { getLocalStore, setLocalStore } from "../../utils/localStorage";

import "./Settings.scss";

export default function Settings() {
  const { input, setInput, options } = useContext(AppContext);
  const [newLabel, setNewLabel] = useState("");
  const [hint, setHint] = useState("");
  const [type, setType] = useState(options[0].value);

  const settingsSubmit = ($event) => {
    $event.preventDefault();
    addNewLabel();
  };

  const addNewLabel = () => {
    if (newLabel !== "") {
      if (input[newLabel] !== undefined) {
        return alert(`${newLabel} already exist`);
      }
      const newOption = { value: "", type, hint };
      unstable_batchedUpdates(() => {
        setInput({
          ...input,
          [newLabel]: JSON.parse(JSON.stringify(newOption)),
        });
        setNewLabel("");
      });

      const config = getLocalStore() || {};
      if (Object.keys(config).length !== 0) {
        config.input[newLabel] = JSON.parse(JSON.stringify(newOption));
      } else {
        config.input = { [newLabel]: JSON.parse(JSON.stringify(newOption)) };
      }
      setLocalStore(config);
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
      <form className="inline-form" onSubmit={settingsSubmit}>
        <Select
          options={options}
          selectedValue={type}
          onChange={(option) => setType(option.value)}
        />
        <Input
          name="Add New label*"
          value={newLabel}
          placeholder="Enter new input label"
          onChange={(value) => setNewLabel(value)}
        />
        <Input
          name="Hint"
          value={hint}
          placeholder="Add hint for this input"
          onChange={(value) => setHint(value)}
        />
        <Button type="submit" onClick={addNewLabel}>
          Add new label
        </Button>
      </form>
    </div>
  );
}
