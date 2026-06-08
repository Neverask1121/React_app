// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [nums, setUsers] = useState(['aman ', 'aditya ', 'sanskriti'])
//   const [number, setNums] = useState(67);
//   function changeNum(){
//     setNums(69);
//     setUsers(['aditya ', 'subhi ', 'riya']);    
//   }


//   return (


//     <div>
//       <h1>The value of a is {nums}</h1>
//       <h1>The value of number is {number}</h1>
//       <button onClick={changeNum}>Click me</button>
//     </div>
//   )
// }

// export default App



// This is a counter project.....


import React from 'react'
import { useState } from 'react';

const App = () => {


  const [num, setNum] = useState(0);

  function increaseNum(){
    setNum(num+1);
  }

  function decreaseNum(){
    setNum(num-1);
  }

  function jumby69(){
    setNum(num+69)
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick = {increaseNum} className = "my-button">increase</button>
      <button onClick = {decreaseNum} className = "my-button">decrease</button>
      <button onClick = {jumby69} className = "my-button">Jump</button>
    </div>
  )
}

export default App
