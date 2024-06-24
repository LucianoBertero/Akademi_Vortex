import "./App.css";

function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return (
    <>
      <h1>Hi there</h1>
    </>
  );
}

export default App;
