import "./App.css";
import { Acordion } from "./components/Acordion";
import { DropDown } from "./components/DropDown";
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

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The color blue",
    value: "blue",
  },
];

function App() {
  return (
    <>
      {/* <Search></Search> */}
      <DropDown options={options}></DropDown>

      {/* <br />
      <Acordion items={items}></Acordion> */}
    </>
  );
}

export default App;
