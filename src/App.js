import React, { Fragment } from 'react'
import logo from './images/COVID19.jpg';
import './App.css'
import GlobalCases from './components/GlobalCases';
import CaseByCountries from './components/CaseByCountries';

const App = () => {
  return (
    <Fragment>
      <div className="header text-center mt-2">
        <h3>COVID-19 CORONAVIRUS DASHBOARD</h3>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <GlobalCases/>
      <CaseByCountries/>
    </Fragment>
  )
}

export default App
