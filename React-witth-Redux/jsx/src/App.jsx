import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function getButtonText() {
  return "Click on me!!!!";
}
const buttonText = { text: "Click me!!!" };
const style = { backgroundColor: "blue", color: "white" };
const labelText = "Enter Name";

function App() {
  return (
    <>
      <label htmlFor="name" className="label">
        {labelText}
      </label>
      <input type="text" id="name" />
      <button style={style}>{buttonText.text}</button>
    </>
  );
}

export default App;
