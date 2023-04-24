import React from 'react'
import goals from './goals.jfif'
import { Goal_content } from '../content.js'
import './Goals.css'

const Goals = () => {
  return (
    <div>
      <div className='title'>
      <h1>My Goals</h1>
      </div>

      <div className='img'>
        <img src={goals} alt='Team Img'/>
      </div>

      <div className='content'>
        <p>
        {Goal_content[0]}
        <br/>
        </p>
      </div>
    </div>
  )
}

export default Goals