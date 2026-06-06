import React from 'react'
import {Bookmark } from "lucide-react"

const App = () => {
  return (
    <div className = "parent">
      <div className="card">
        <div className="top">
          <img src='https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg'></img>
          <Bookmark/>
        </div>
        <div className="center">
          <h3>Amazon <span>3 days ago</span></h3>
          <h2>Senior UI/UX designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Remote</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$100/hr</h3>
            <p>Hyderabad, India</p>
            <div>
              <button>Apply now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
