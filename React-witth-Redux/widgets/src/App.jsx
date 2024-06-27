import "./App.css";
import { Acordion } from "./components/Acordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a faorite JS library among engineers",
  },
  {
    title: "Hoe do you use React",
    content: "You use React by creating components",
  },
];

function App() {
  return (
    <>
      <Search></Search>

      {/* <br />
      <Acordion items={items}></Acordion> */}
    </>
  );
}

export default App;
