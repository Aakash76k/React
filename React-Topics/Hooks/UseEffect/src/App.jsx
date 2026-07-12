import { useEffect, useState } from 'react'

import './App.css'
import DigitalClock from './Digital-Watch/DigitalClock';
import Stopwatch from './Stop-Watch/Stopwatch';
import Apifetch from './Api-Fetch/Apifetch';




function App() {
  

  return (
    <>
      <DigitalClock/>
      <Stopwatch/>
      <Apifetch/>

    </>
  )
}

export default App;
