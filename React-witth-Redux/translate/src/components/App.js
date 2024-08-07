import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          ></i>
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate></UserCreate>
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}
export default App;
