
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="container mt-4">
      <div className="weather-app-wrapper">
        <div className="card">
          <div className="card-body">
            <div className="bar">
              <div className="mb-3">
                <div className="row">
                  <div className="col-6">
                    <form id="search-form">
                      <input
                        type="text"
                        className="form-control"
                        id="city-input"
                        placeholder="Enter City"
                        autocomplete="off"
                        autoFocus="on"
                      />
                      <div className="col-3">
                        <button type="sbumit" className="btn btn-dark btn-1">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="city" id="displayed-city">
              New york
            </div>
            <div className="today">Monday, 12:23</div>
            <div className="today" id="description">
              clouds
            </div>

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
