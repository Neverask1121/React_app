import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const arr = [10, 20, 30]

  return (
    <div className="parent">
      {arr.map(function(elem){
        return <Card/>
      })}
    </div>
  )
}

export default App
