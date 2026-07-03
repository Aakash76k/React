import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Increment from './Components/Increment'
import Decrement from './Components/Decrement'
import Reset from './Components/Reset'
import StringState from './Components/StringState'
import BooleanState from './Components/BooleanState'
import ArrayState from './Components/ArrayState'

function App() {
  return (
    <>
      <Increment />
      <Decrement/>
      <Reset/>
      <StringState/>
      <BooleanState/>
      <ArrayState/>
    </>
  );
}

export default App;
