import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = ({ colors }) => {
  const [pickedColor, setPickedColor] = useState("#1a1a1a");

  return (
    <div className="color-picker" style={{ backgroundColor: pickedColor }}>
      <div className="input">
        <div className="color-list">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => {
                setPickedColor(color);
              }}
              className="color"
              style={{ background: `${color}` }}
            ></div>
          ))}
        </div>
      </div>
      <div id="output" style={{ background: `${pickedColor}` }}></div>
    </div>
  );
};

export default ColorPicker;
