import logo from "./logo.svg";
import "./App.css";

function App() {
  const text = process.env.REACT_APP_TEXT;
  // console.log(text)
  const url = process.env.REACT_APP_URL;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{text}</p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
