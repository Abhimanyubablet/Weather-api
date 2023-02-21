import React, { useEffect, useState } from 'react'

export default function Temp() {
    const[city,setCity]=useState(null)
    const[wind,setWind]=useState(null)
    const[desc,setDesc]=useState(null)
    const[search,setSearch]=useState("Mumbai")


    useEffect(()=>{
        const fetchApi= async () =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=19e4b7e5dc680e2121cec7dd8be16be2`
            const response = await fetch(url) 
            const resJson=await response.json();
            console.log("my",resJson);
            setCity(resJson.main)
            setWind(resJson.wind)
            setDesc(resJson.weather[0])

        }
        fetchApi();
    },[search])

    

  return (
    <>
    
    <div className="card">
        <div className="search">
        <input value={search} onChange={(e)=>{ setSearch(e.target.value) }}  type="text" className="search-bar" placeholder="Search for a place..." autocomplete="off"/>



        <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
        </path>
       </svg></button>
     </div>
     
     {!city ? (
         <p>No Data Found</p>
     ):(
        <div className="weather loading">
        <h2 className="city">
            <i style={{fontSize:"35px",margin:"10px"}} class="fa-solid fa-street-view"></i> 
            {search} </h2>
        <h2 className="temp">{city.temp}°Cel </h2>
        <h3> Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
        <div className="flex">
        <img className="pic" src="https://openweathermap.org/img/wn/01n.png" alt="pic"  />
        <div className="descript">{desc.description}</div>
        </div>
        <div className="humidity">Humidity:{city.humidity}% </div>
        <div className="wind">Wind speed: {wind.speed}km/h</div>
    </div>
     )}

    
     
    </div>
 
    </>
  )
}
