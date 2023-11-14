import Search from './component/search/search';
import './App.css';
import CurrentWeather from './component/current-weather/current-weather';
import { openWeatherApi, weatherApiKey,  } from './api';
import { useState } from 'react';
import Forecast from './component/forecast-weather/forecast'; 



function App() {

  
  const [CurrentFetch, setCurrentFetch ] = useState(null)
  const [forcastFetch, setforcastWeatherFetch] = useState(null)

  function handleSearchResult(searchResult) {


       const  [lat, lon]  = searchResult.value.split(" ")

       const CurrentWeatherfetch =  fetch(`${openWeatherApi}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&unit=metric`)
       const  forcastFectch =  fetch(`${openWeatherApi}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&unit=metric`)

       Promise.all([CurrentWeatherfetch, forcastFectch]).then(async (response) => {
          const weatherResponse = await response[0].json()
          const forecastResponse = await response[1].json()

          setCurrentFetch({city:searchResult.label, ...weatherResponse})
          setforcastWeatherFetch({city:searchResult.label, ...forecastResponse})

       })
       
       

.catch((error) => console.log(error))


  }

  // console.log(CurrentFetch)
  // console.log(forcastFetch)


  return (
    <div className="container">

      <Search  onsearchChange={handleSearchResult}/>
     {CurrentFetch &&  <CurrentWeather data={CurrentFetch}/>}
     {forcastFetch &&  <Forecast  data={forcastFetch }/>}

    </div>  
  );
}


export default App;
