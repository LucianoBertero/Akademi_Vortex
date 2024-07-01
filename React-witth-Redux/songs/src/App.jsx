import { useState } from "react";
import { selectSong } from "./actions";

import "./App.css";
import SongList from "./components/SongList";

function App() {
  return (
    <>
      <SongList></SongList>
    </>
  );
}

export default App;
