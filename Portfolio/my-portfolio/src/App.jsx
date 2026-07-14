

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Router/Navbar'
import Home from './Router/Home'
import Project from './Router/Project'
import Post from './Router/Post'
import About from './Router/About'
import Dark from './Router/Dark'
import Footer from './Router/Footer'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Project" element = {<Project/>}/>
        <Route path = "/Post" element = {<Post/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/Dark" element = {<Dark/>}/>

       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
