import React, { useState } from 'react'

const App = () => {
  const [num, setNum]=useState(10);
  const btnClicked = () => {
    console.log(num);
    setNum(20); // This is a asynchronous process here
    console.log(num);
  };





  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click nigga</button>
    </div>
  )
}

export default App
