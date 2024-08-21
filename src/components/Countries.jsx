import { useEffect, useState } from "react";
import Country from "./Country";
import "./Counties.css"



const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitdeCountry,setiVsitdeCountry]=useState([]);

    const [visitedFlags,setVisitedFlags]=useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            // .then(data=>setCountries(data));
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry= country =>{
        console.log("add this to visited !!");
        // console.log(country);

        const newVisitedCountry =[...visitdeCountry,country];
        setiVsitdeCountry(newVisitedCountry);


    }

    const handleVisitedFlags = flags=>{
        console.log("Add flag  !!! ");
        const newAddadeFlags=[...visitedFlags,flags];
        setVisitedFlags(newAddadeFlags);
    }
    return (
        <>
            <h2>number of country : {countries.length} </h2>
              
               {/*visited country name  */}
             <div>
                    <h5>Visited counrty :{visitdeCountry.length} </h5>
                    {
                        visitdeCountry.map(cntry=> <li key={cntry.cca3}>  {cntry.name.common} </li>)
                    }
             </div>
            {/* visited country flags */}
            <div>
                {
                    visitedFlags.map(flag=> <img src={flag }></img>)
                }
            </div>
            <div className="country-container">
        
            {
                countries.map(country => <Country key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                     country={country}></Country>)
            }

        </div>
        </>
    );
};

export default Countries;