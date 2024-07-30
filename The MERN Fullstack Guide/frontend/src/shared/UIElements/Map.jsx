import React from "react";
import "./Map.css";
export const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      Map
    </div>
  );
};
