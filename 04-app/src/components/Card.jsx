import React from 'react'
import { Bookmark } from "lucide-react"


const Card = () => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src='https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg'></img>
                    <button><Bookmark /> Save</button>
                </div>
                <div className="center">
                    <h3>Amazon <span>3 days ago</span></h3>
                    <h2>Senior UI/UX designer</h2>
                    <div className="tag">
                        <h4>Part Time</h4>
                        <h4>Remote</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-left">
                    <h3>$100/hr</h3>
                    <p>Hyderabad, India</p>
                </div>
                <button className="bottom-right">Apply now</button>
            </div>
        </div>
    )
}

export default Card
