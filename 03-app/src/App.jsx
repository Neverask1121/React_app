import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className = "parent">
      <Card user = "Bhandari" age = {18}/> {/**So this a comment and this is the first prop I created */}
      {/**Is this a comment or what */}
      {/**Props are also can be told as by the name properties */}
      <Card user = "Alina" age = {21}/>
      
    </div>
  )
}

export default App
