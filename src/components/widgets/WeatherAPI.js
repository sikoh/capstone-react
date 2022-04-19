import React from 'react'
import {useState} from 'react'

import DisplayWeather from './DisplayWeather'

function WeatherAPI() {

    const [weather, setWeather] = useState([])
    const [form, setForm] = useState({
        city:"",
        country:""
    })

    

    const APIKEY = "6c9340422a437c5cb3e8a80ba2d06c29";

    async function weatherData(e){
        e.preventDefault();

        if ((form.city == "") || (form.country == "")) {
            alert("Add Values")
        } else{
            const data = await fetch (
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.state}&appid=${APIKEY}&units=imperial`
            )
                .then((res) => res.json())
                .then((data) => data);

            setWeather( {data: data} );

        }
    }

    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value

        if(name == "city"){
            setForm({...form, city:value})
        }

        if(name == "country"){
            setForm({...form, country:value})
        }
        // console.log(form.city, form.country);
    };

  return (
    <div className='app-wrapper'>
        <div className='title'>WeatherAPI</div>
        <br/>
        <form>
            <input type="text" name="city" placeholder='city' onChange={e => handleChange(e)}/>
            <input type="text" name="country" placehplder="country" onChange={e => handleChange(e)}/>
            <button className="get-weather" onClick = {e => weatherData(e)}>Get Weather</button>
        </form>

         {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
    
  )
}

export default WeatherAPI