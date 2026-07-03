import { useState } from 'react'

import './App.css'
import Increment from './Components/Increment'
import Decrement from './Components/Decrement'
import Reset from './Components/Reset'
import StringState from './Components/StringState'
import BooleanState from './Components/BooleanState'
import ArrayState from './Components/ArrayState'
import ObjectState from './Components/ObjectState'

function App() {
  return (
    <>
      <Increment />
      <Decrement/>
      <Reset/>
      <StringState/>
      <BooleanState/>
      <ArrayState/>
      <ObjectState/>
    </>
  );
}

export default App;
