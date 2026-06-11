import React, { useState } from 'react'

const App = () => {

  const[title, setTitle] = useState(' ');


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form has been submitted by', title);

    setTitle(' ');
  };


  return (
    <div>
      <form onSubmit={(e) => {submitHandler(e)}}>
        <input type = "text" 
        placeholder='Enter your name nigga'
        value = {title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App


// two way binding is the case in which the react is made to do a particular input tasks not directly but after multiple logical statements

