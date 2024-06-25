import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // Aquí deberías realizar la solicitud a una API para buscar imágenes
    // Por ejemplo, podrías usar axios para hacer una solicitud a Unsplash API
    // const response = await axios.get('https://api.unsplash.com/search/photos', {
    //   params: { query: term },
    //   headers: {
    //     Authorization: 'Client-ID YOUR_ACCESS_KEY'
    //   }
    // });
    // this.setState({ images: response.data.results });
    console.log(term); // Por ahora, solo muestra el término de búsqueda en la consola
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
