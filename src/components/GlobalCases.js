import React, { Fragment, useEffect, useState } from 'react'
import Card from './Card'
import './GlobalCases.css'

const GlobalCases = () => {

    const [CovidData,setCovidData] = useState();

    const getCovidData = async() => {
        try {
            const response = await fetch("https://covid19.mathdro.id/api");
            const data = await response.json()
            setCovidData(data);
            // console.log(CovidData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getCovidData();
    },[]);


    // console.log(CovidData.confirmed.value); 

    if(!CovidData){

            return (
            <h3>loading....</h3>
        )
    }
    else{
        return(
            <Fragment>
            <div className="card-area ">
                <div className="container">
                    <h1 className="text-center" id="global-heading">Total Cases Around the World</h1>
                    <div className="row mt-5">
                        <Card
                            title="Infected"
                            cases={CovidData.confirmed.value}
                            desc="No. of active cases from COVID-19"
                            lastupdate={CovidData.lastUpdate}
                            color='blue'
                        />
                        <Card 
                            title="Recovered"
                            cases={CovidData.recovered.value}
                            desc="No. of recoveries from COVID-19"
                            lastupdate={CovidData.lastUpdate}
                            color='green'
                        />
                        <Card 
                            title="Deaths"
                            cases={CovidData.deaths.value}
                            desc="No. of deaths caused by COVID-19"
                            lastupdate={CovidData.lastUpdate}
                            color='red'
                        />
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }

    
}

export default GlobalCases
