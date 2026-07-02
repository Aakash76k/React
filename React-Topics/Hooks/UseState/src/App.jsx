import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Increment from './Components/Increment'
import Decrement from './Components/Decrement'

function App() {
  return (
    <>
      <Increment />
      <Decrement/>
    </>
  );
}

export default App;
