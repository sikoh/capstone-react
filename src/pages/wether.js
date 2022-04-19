import React from "react";

import WeatherAPI from "../components/widgets/WeatherAPI";

const Weather = () => {
    return (
        <div style={{ display: "flex", flexDirection:"column", justifyContent:"center", padding:"10% 40%"}}>


            <WeatherAPI/>

        </div>

    );
};


export default Weather;
  