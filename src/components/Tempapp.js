import React, { useEffect, useState } from 'react';
import "./style.css";
// import {FontAwesomeIcon} from 'react-icons'
// import { FaBeer } from 'react-icons/FaStreetView';
import {FaBeer} from 'react-icons/fa'

const Tempapp = () => {

    const [city, setcity] = useState(null);
    const [search, setSearch] = useState("Faridabad")

    useEffect(() => {
      const fetchApi= async()=>{
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=deab6c0360c9e42b2b5ce9c8ab08e8fb`;
        const response= await fetch(url);
        const resJson= await response.json();
        // console.log(resJson);
        setcity(resJson.main);
    } 
    

      fetchApi();
    },[search])
    

  return (
    <>
    <div className='box'>
        <div className='inputData'>
        <input type="search" className='inputFeild' value={search} onChange={(event)=>{
                setSearch(event.target.value);
        
        }} />
        </div>

        {!city ? (
            <p className='errorMsg'>No City Found </p>
        ) : <>
            <div className="info">
        <h2 className="location">
        {search}<FaBeer />
        </h2 >
        <h1 className="temp">{city.temp}*C
        </h1>
        <h3 className='tempmin_max'> Min : {city.temp_min} *C | {city.temp_max} : 35.50 *C</h3>
    </div>
    <div className="wave1"></div>
    <div className="wave2"></div>
    <div className="wave3"></div>

        </>}

    
    </div>
    </>
  )
}

export default Tempapp;