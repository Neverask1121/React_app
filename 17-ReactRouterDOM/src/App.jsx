import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <div>
        <h3>Aditya's</h3>
        <div>
          <a href='/'>Home</a>
          <a href='/About'>About</a>
          <a href='/Contact'>Contacts</a>
        </div>
      </div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path = '/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <h2>This is footer</h2>
    </div>
  )
}

export default App
