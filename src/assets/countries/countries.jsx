import React, { use } from 'react';
import Country from './country';
import './country.css'
import { useState } from 'react';
function Countries({countryPromiss}) {
    const countries = use(countryPromiss);
    const country = countries.countries;
    const [visitedCountry,setVisitedCountry] = useState([]);
    const handleVisitedCoountry = (thisCountry) => {
        const newVisitedCountry = [...visitedCountry,thisCountry];
        console.log(newVisitedCountry)
        setVisitedCountry(newVisitedCountry);
  }
    return (
        <div >
            <p  >Visited Country : {visitedCountry.length} </p>
            <ol>
            {
                visitedCountry.map(visitedCountry => 
                    <li key={visitedCountry.ccn3.ccn3}>{visitedCountry.name.common}</li>
                )
            }
        </ol>
           <div className='country'>
            {
              country.map(everyCountry =>     
            <Country  everyCountry = {everyCountry} 
            handleVisitedCoountry={handleVisitedCoountry}></Country>)
            }
           </div>
        </div>
    );
}
export default Countries;   