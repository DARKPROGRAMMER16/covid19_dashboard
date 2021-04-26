import React, { Fragment, useEffect, useState } from 'react'

const CountryList = ({getfunc}) => {

    const [Countries,setCountries] = useState([]);

    const getCountries = async() => {
        try {
            const response = await fetch("https://covid19.mathdro.id/api/countries");
            const countrydata = await response.json();
            const arrcountry = countrydata.countries.map(country => country.name)
            // console.log(arrcountry);
            setCountries(arrcountry);
            
        } catch (err) {
            console.error(err.message)
        }
        
    }

    useEffect(() => {
        getCountries()
    },[])
    // console.log(Countries);

    return (
        <Fragment>
            <div className="select-area mb-5">
                <select className="form-select" aria-label="Default select example" onChange={(e) => getfunc(e.target.value)}>
                    <option value="india">India</option>
                    {Countries.map((country,i) => {
                        return(
                            <option key={i} value={country}>{country}</option>
                        )
                    })}
                </select>
            </div>
            
        </Fragment>
    )
}

export default CountryList
