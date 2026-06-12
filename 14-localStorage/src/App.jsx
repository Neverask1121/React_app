import React from 'react'

const App = () => {
  
  // localStorage.setItem('user', 'Aditya')
  // localStorage.setItem('age', 18);
  // const age = localStorage.getItem('age');
  // const user = localStorage.getItem('user');
  // localStorage.removeItem('user');
  // console.log(user);
  // console.log(age);
  // console.log(`User ${user} has the age of ${age}`);

  const user = {
    username: 'Aditya',
    age: 18,
    College: 'IIT DIU'
  };
  localStorage.setItem('user', JSON.stringify(user));
  console.log(user);
  const userName = JSON.parse(localStorage.getItem('user'));
  console.log(typeof(userName));
  

  return (
    <div>
      App      
    </div>
  )
}

export default App
