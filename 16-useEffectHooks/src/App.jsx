import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {
  const [num, setnum] = useState(10);
  const [num2, setnum2] = useState(11);
  useEffect(function(){
    console.log('useEffect is running...');
  }, [num]) //dependency array stops the function from running times more than one
  return (
    <div>
      <h1>value of num1 is {num}</h1>
      <h1>value of num2 is {num2}</h1>
      <button onClick={() => {
        setnum(num+1);
        setnum2(num2-1);
      }}>click it</button>
      <p>Yes</p>
    </div>
  )
}

export default App
