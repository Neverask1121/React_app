import axios from 'axios'
import {React, useState} from 'react'

const App = () => {
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(response);
  // }


  // using the arrow function here

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(response)

  //   const data = await response.json();
  //   console.log(data);    
  // }

  // Now doing the api calling using the axios is what they say

  const [data, setdata] = useState("");


  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response.data);
    setdata(response.data);
    //now trying destructuring

    // use curly braces in responnse and no need to type .data anymore
    
  }  

  return (
    <div>
      <h1>App here</h1>
      <button onClick={getData}>Get data</button>
      {data.map(function(elem, idx){
        return <h3>Hello</h3>
      })}
    </div>
  )
}

export default App
