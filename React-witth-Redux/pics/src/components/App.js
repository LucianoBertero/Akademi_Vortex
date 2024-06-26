import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;

/// API KEY nbO7M6JbyPXN0B0RZoUNTEjicB0c45VeA0liPe7Grts
/// API KEY SECRET K0JLLCrms3Z5GPxhTXnIT4HcSw--rRdG1j5D4Qgz_lc
//ID APLICATION  626936
//
