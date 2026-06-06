import React from 'react'

const Card = (receiver) => {
  return (
      console.log(receiver.user, receiver.age),
      <div className="card">
        <img src = {receiver.img}></img>
        <h1>{receiver.user}</h1>
        <h3>Age = {receiver.age}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, rerum?</p>
        <button>Touch me</button>
      </div>
  )
}

export default Card
