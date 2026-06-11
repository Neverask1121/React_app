import React from 'react'

const App = () => {


  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submission success');
  };


  return (
    <div className='h-screen lg:flex bg-amber-100'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex lg:w-1/2 justify-between items-start p-10'>
        <div className='flex font-medium gap-4 w-1/2 items-start flex-col'>
          <h1 className='text-3xl font-bold'>Add notes</h1>
          <input 
          type = 'text' 
          placeholder='Enter your tasks'
          className='px-5 py-2 w-full border-5 rounded outline-none'
          />

          <textarea
          type = 'text'
          placeholder='Enter your details'
          className='px-5 py-2 w-full h-32 items-start flex-row flex border-5 rounded outline-none'
          />
          <button className='bg-amber-950 w-full text-amber-50 px-5 py-2 rounded-2xl'>Add notes</button>
        </div>
        <img className = 'h-52' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Anime_stub.svg/960px-Anime_stub.svg.png" alt="" />
      </form>
      <div className='lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className='text-3xl font-bold'>Your notes</h1>
        <div className='flex flex-wrap mt-5 gap-6 overflow-auto h-full'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App
