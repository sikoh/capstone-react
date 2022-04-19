import React from "react";



function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <div>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}. Weather
            </span>
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {data.main.temp}
              <sup>o</sup>F
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <img className="weather-icon" src={iconurl} alt="" srcSet="" />
            <span className="weather-description">
              {data.weather[0].description}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
                    <h4>High/Low</h4>
                    <span>
                      {data.main.temp_max}/
                      {data.main.temp_min}
                    </span>
                    <h4>Humidity</h4>
                    <span>{data.main.humidity} %</span>
     
                    <h4>Pressure</h4>
 
                    <span>{data.main.pressure} hPa</span>

                    <h4>Visibility</h4>

                    <span>{data.visibility / 1000} Km</span>
            </div>

            <div className="section2">

                    <h4>Wind</h4>
   
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>

                    <h4>Wind Direction</h4>

                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>

                    <h4>Sunrise</h4>
   
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>

                    <h4>Sunset</h4>

                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
