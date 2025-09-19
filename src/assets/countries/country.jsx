import React, { useState } from 'react';

function Country({everyCountry,handleVisitedCoountry}) {
    const [visited,setvisited] = useState(false);
    const toggleBtn = () => {
        visited? setvisited(false) : setvisited(true);
        handleVisitedCoountry(everyCountry);
    
    }
    return (
        <div className={`everyCountry ${visited? 'country-visited' : 'country-not-visited'}`}>
            <img src={everyCountry.flags.flags.png} alt={everyCountry.flags.flags.alt} />
            <p>Name : {everyCountry.name.common}</p>
            <p>Area: {everyCountry.area.area}</p>
            <p>Population: {everyCountry.population.population}</p>
            <button onClick={toggleBtn}>{visited? 'Visited': 'Not visited'}</button>
        </div>
    );
}

export default Country;