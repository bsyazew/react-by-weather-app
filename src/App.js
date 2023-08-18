
import './App.css';

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
                      autofocus="on"
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

          <div className="city" id="displayed-city">New york</div>
          <div className="today">Monday, 12:23</div>
          <div className="today" id="description">clouds</div>
         
          <div className="col-6">
            <div className="weather-temp">
            <ul className="features">
              <li>Humidity: <span id="humidity">33</span>%</li>
              <li>Wind: <span id="wind">33</span>Km/H</li>
            </ul>
            <ul id="temp">
              <li>
                  <div>
                    <img
                    src="https://openweathermap.org/img/wn/10d@2x.png" 
                    alt="Clouds"
                    className= "todays-weather-description"
                    id="icon"></img></div>
                    
                <span className="degrees" id="todays-temperature">90</span>
                <span className="deg-celsius">℃</span>
               
              </li>
            </ul>
          </div>
          </div>
        
         
          <div className="weather-forecast" id="forecast">
          
          </div>
        </div>
      </div>
      </div>
      <a
        href="https://github.com/bsyazew/weather-app-new1"
        target="_blank"
        className="link"
        >Open-source code</a
      >, by Bethlehem Yazew
    </div>
    
  );
}

export default App;
