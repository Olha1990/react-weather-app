import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/olha-bondarenko-393090242/"
            target="_blank"
            rel="noreferrer"
          >
            Olha Bondarenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Olha1990/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
