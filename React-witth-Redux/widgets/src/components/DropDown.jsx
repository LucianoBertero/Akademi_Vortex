import React from "react";

export const DropDown = ({ options }) => {
  const renderOptions = options.map((option) => {
    return (
      <div className="item" key={option.value}>
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          Select a Color
        </label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">Selct Color</div>
          <div className="menu visible transition">{renderOptions}</div>
        </div>
      </div>
    </div>
  );
};
