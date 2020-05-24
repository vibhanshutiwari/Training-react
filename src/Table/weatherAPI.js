import React, { useState, useEffect } from 'react';




function Weatherforeacast() {
    const [data, setdata] = useState([]);

    useEffect(() => {

        fetch('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=60f8a4ec0c2e629990093f2a37aa0808')
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setdata(result);
            });
    }, []);


    return (
        <div className="container mt-5">
            <h4>Weather forecast London in Uk.</h4>
           <ul className="bg-light">
           {data.weather?.map(num => (
                <label> Forecast -- {num.main}, {num.description}</label>
            ))}

           </ul>
           

           <div className="container bg-light">
            <label>temperature -- {data.main?.temp} </label> <br></br>
            <label>feel-like {data.main?.feels_like}</label> <br></br>
            <label>temp-min -- {data.main?.temp_min}</label> <br></br>
            <label>temp-max -- {data.main?.temp_max}</label> <br></br>
            <label> pressure -- {data.main?.pressure}</label> <br></br>
            <label> humidity -- {data.main?.humidity} </label> <br></br>
            <label>wind speed -- {data.wind?.speed}</label> <br></br>
            <label>deg -- {data.wind?.deg}</label> <br></br>
        </div>
     </div>
    );
}


export default Weatherforeacast;

