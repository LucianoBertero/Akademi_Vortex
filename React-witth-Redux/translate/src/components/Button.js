import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui  button primary ${color}`}>
            <LanguageContext>
              {(value) => this.renderSubmit(value)}
            </LanguageContext>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
