import React from 'react'
import { useState } from 'react'

const App = () => {
  const [nums, setUsers] = useState(['aman ', 'aditya ', 'sanskriti'])
  const [number, setNums] = useState(67);
  function changeNum(){
    setNums(69);
    setUsers(['aditya ', 'subhi ', 'riya']);    
  }


  return (


    <div>
      <h1>The value of a is {nums}</h1>
      <h1>The value of number is {number}</h1>
      <button onClick={changeNum}>Click me</button>
    </div>
  )
}

export default App
