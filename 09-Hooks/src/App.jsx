import React from 'react'
import { useState } from 'react'

const App = () => {
  const [nums, setNum] = useState('aman')
  function changeNum(){
    setNum(69);
  }


  return (


    <div>
      <h1>The value of a is {nums}</h1>
      <button onClick={changeNum}>Click me</button>
    </div>
  )
}

export default App
