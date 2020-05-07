import React, { useState, useEffect, useRef } from "react";

import "./Select.scss";

export default function Select(props) {
  const { selectedValue, options, onChange } = props;

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", eventHandler);
    }
    return () => {
      document.removeEventListener("click", eventHandler);
    };
  }, [isOpen]);

  const eventHandler = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const activeOption = options.find((option) => option.value === selectedValue);

  const optionClicked = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const triangle = isOpen ? (
    <span className="triangle">&#9653;</span>
  ) : (
    <span className="triangle">&#9661;</span>
  );

  return (
    <div className="select">
      <p onClick={() => setIsOpen((c) => !c)}>
        <span>{activeOption.label}</span> {triangle}
      </p>

      {isOpen && (
        <ul className="drop-down" ref={ref}>
          {options.map((option, index) => (
            <li
              value={option.value}
              key={index}
              onClick={() => optionClicked(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
