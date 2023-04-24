import React from 'react'
import event from './event.jpg'
import { Event_content } from '../content.js'
import './Event.css'

const Events = () => {
  return (
    <div>
      <div className='title'>
      <h1>Events</h1>
      </div>

      <div className='event_img'>
        <img src={event} alt='Team Img'/>
      </div>

      <div className='content'>
        <p>
        {Event_content[0]}
        <br/>
        
        <pre/>{Event_content[1]}
        </p>
      </div>
    </div>
  )
}

export default Events