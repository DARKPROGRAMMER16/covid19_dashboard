import React, { Fragment, useEffect, useState } from 'react'
import CountryList from './CountryList';

import './CaseByCountries.css';
import ChartData from './ChartData';

const CaseByCountries = () => {

    let url = "https://covid19.mathdro.id/api";
    let curl = "https://covid19.mathdro.id/api/countries"

    const [Cdata,setCdata] = useState();

    const getCdata = async() => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setCdata(data);
            
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCdata(); 
    }, []);

    const getCNdata = async(country) =>{

        try {
            const response = await fetch(`${curl}/${country}`);
            const data = await response.json()
            setCdata(data);
            
        } catch (err) {
            console.error(err.message);
        }

    }

    // console.log(Cdata);
    
    return (
        <Fragment>
            <div className="container mb-5">
                <h3 className="text-center">Reported Cases or Deaths by Country or Teritory</h3>
                <div className="mt-5">
                    <CountryList getfunc={getCNdata}/>
                    {Cdata ? 
                        <ChartData data={Cdata}/> : "nothing to display"
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default CaseByCountries
