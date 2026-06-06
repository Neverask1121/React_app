import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className = "parent">
      <Card user = "Bhandari" age = {18} img = "https://plus.unsplash.com/premium_photo-1666672388644-2d99f3feb9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> {/**So this a comment and this is the first prop I created */}
      {/**Is this a comment or what */}
      {/**Props are also can be told as by the name properties */}
      <Card user = "Alina" age = {21} img = "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      
    </div>
  )
}

export default App
