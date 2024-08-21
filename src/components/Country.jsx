
import { useState } from "react";
import "./Country.css"
import "./Counties.css"
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    console.log(country);

    const{name,flags}= country;


    const [Visited,setVisited]= useState(false);

    //   console.log(handleVisitedCountry);

    const submitted = ()=>{
        // setVisited(true);
        setVisited(!Visited);
    }
    return (
        // <div className="box">
        <div className={`box ${Visited && "visited"}`}>
       
            <h3>name : {name.common} </h3>
             <img src={flags.svg} alt="" />
             <button onClick={()=>handleVisitedCountry(country)}>mark Visited</button>
             <button onClick={()=>handleVisitedFlags(country.flags.png)}>add flag</button>

             {/* {Visited && "I Have Vosited !!"}; */}
             <button onClick={()=>submitted()}>{Visited ? "visited" :"going" }</button>
             { Visited ? "I Haver already viseterd me":"i want to visit" }
        </div>
    );
};

export default Country;