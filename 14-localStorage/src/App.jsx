import React from 'react'

const App = () => {
  
  // localStorage.setItem('user', 'Aditya')
  // localStorage.setItem('age', 18);
  const age = localStorage.getItem('age');
  const user = localStorage.getItem('user');
  localStorage.removeItem('user');
  console.log(user);
  console.log(age);
  console.log(`User ${user} has the age of ${age}`);
  return (
    <div>
      App      
    </div>
  )
}

export default App
