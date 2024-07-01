import { combineReducers } from "redux";
// Importa selectSong como una exportación nombrada, si es necesario
// import { selectSong } from "../actions"; // Si necesitas usarla aquí

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:35" },
    { title: "All Star", duration: "7:05" },
    { title: "I Want It That Way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

export default rootReducer;
