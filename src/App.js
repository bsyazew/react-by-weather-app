
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="container mt-4">
      <div className="weather-app-wrapper">
        <div className="card">
          <div className="card-body">
          

            <Weather />

            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/bsyazew/react-by-weather-app"
        target="_blank"
        className="link"
      >
        Open-source code
      </a>
      , by Bethlehem Yazew
    </div>
  );
}

export default App;
