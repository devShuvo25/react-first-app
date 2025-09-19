
import { useState } from 'react';
import './App.css'
import Countries from './assets/countries/countries'
import './assets/countries/country.css'

const countryPromiss = fetch('https://openapi.programming-hero.com/api/lang/english')
.then(res => res.json());
function App() {
  
  return (
    <>
    <h1 className='country'>All Countries</h1>
    <Countries countryPromiss={countryPromiss} ></Countries>
    </>
  )
}

export default App
