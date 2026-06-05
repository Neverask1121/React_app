import React from 'react'

const Card = (receiver) => {
  return (
      console.log(receiver.user, receiver.age),
      <div className="card">
        <img src ="https://images.unsplash.com/photo-1778100207121-2ee237397a43?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        <h1>{receiver.user}</h1>
        <h3>Age = {receiver.age}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, rerum?</p>
        <button>Touch me</button>
      </div>
  )
}

export default Card
