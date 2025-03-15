import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Param from './Param'
import About from './About'
import Contact from './Contact'
import Service from './Service'

const App = () => {
  return (
   <>


    <BrowserRouter>
    <Routes>




      

      <Route path='/' element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='param/:name?' element={<Param/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='service' element={<Service/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
   
   
   </>
  )
}

export default App