import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';


const App = () => {

  const [title, settitle] = useState("");
  const [Details, setDetails] = useState("");
  const [Task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...Task];
    copyTask.push({title, Details})
    setTask(copyTask);
    console.log(copyTask);
    
    settitle('');
    setDetails('');
  };
  const deleteNote = (idx) => {
    const copyTask = [...Task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  };

  return (
    <div className='h-screen lg:flex bg-amber-100'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex lg:w-1/2 justify-between items-start p-10'>
        <div className='flex font-medium gap-4 w-1/2 items-start flex-col'>

          <h1 className='text-3xl font-bold'>Add notes</h1>
          {/* First input */}
          <input 
          type = 'text' 
          placeholder='Enter your tasks'
          className='px-5 py-2 w-full border-5 rounded outline-none'
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          />

          {/* Second input that give the details */}
          <textarea
          type = 'text'
          placeholder='Enter your details'
          className='px-5 py-2 w-full h-32 items-start flex-row flex border-5 rounded outline-none'
          value={Details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          />

          <button className=' cursor-pointer active:bg-gray-400 bg-amber-950 w-full text-amber-50 px-5 py-2 rounded-2xl'>Add notes</button>

        </div>
        <img className = 'h-52' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Anime_stub.svg/960px-Anime_stub.svg.png" alt="" />
      </form>
      <div className='lg:border-l-2 lg:w-1/2 p-10'>
        <h1 className='text-3xl font-bold'>Recent notes</h1>
        <div className='flex flex-wrap mt-5 gap-6 overflow-auto h-[95%]'>
          {Task.map(function(elem, idx){
            return <div key={idx} className="relative h-52 w-40 rounded-xl bg-cover px-6 py-4 bg-[url('https://thumbs.dreamstime.com/b/old-grungy-note-paper-sheet-texture-background-12575306.jpg')]">
              <h2 onClick={()=>{
                deleteNote(idx);
              }}  className= 'cursor-pointer active:scale-95 absolute top-5 right-5 rounded-full text-white bg-red-500 p-1 text-xs'><X size={9} strokeWidth={2.65}/></h2>
              <h3 className='leading-tight text-xl font-bold wrap-break-word'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-taupe-400 wrap-break-word'>{elem.Details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
