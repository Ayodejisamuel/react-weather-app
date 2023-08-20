import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";


function Search({ onsearchChange }) {
  const [search, setSearch] = useState(null);

  // fetch cities from rapidapi
  async function loadOptions(inputValue) {
    const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '673e87e95fmshca1fc1265247c8ap151658jsn126196b9cd91',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    
    try {
      const response = await fetch(`${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`, options);
      const result = await response.json();

  

 
      
      const optionsArray = result.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name} ${city.countryCode}`
        };
      });

      return { options: optionsArray };
    } catch (error) {
       // Handle the error or return an error message
      console.error(error);
     
      return { options: [] };
    }
}


function handleOnChange(searchData) {

  setSearch(searchData);
  setSearch(onsearchChange);

  }


  return (

// To enable page by page display
    <AsyncPaginate
      placeholder="Search For City Weather"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
