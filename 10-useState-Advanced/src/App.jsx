import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum]=useState(10);
//   const btnClicked = () => {
//     console.log(num);
//     setNum(20); // This is a asynchronous process here
//     console.log(num);
//   };



// new

// const App = () => {
//   // const [num, setNum] = useState({user:'Sarthak', age:20})
//   const [num, setNum] = useState([10, 20, 30])
//   const btnClicked = () => {
//     const newNum = [...num]
//     newNum.push(99)
//     // newNum.user = 'Aman';
//     // newNum.age = 19;
//     // setNum(newNum);
//     setNum(newNum);
//   }


const App = () => {
  const[num, setNum] = useState(10)
  const btnClicked = () => {
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }
  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click nigga</button>
    </div>
  )
}

export default App
