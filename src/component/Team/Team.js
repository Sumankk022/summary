import React from 'react'
import team from './team.jpg'
import { Team_content } from '../content.js'

const Team = () => {
  return (
    <div>
      <div className='title'>
      <h1>My Team</h1>
      </div>

      <div className='img'>
        <img src={team} alt='Team Img'/>
      </div>

      <div className='content'>
        <p>
        {Team_content[0]}
        <br/>
        
        <pre/>{Team_content[1]}
        </p>
      </div>
    </div>
  )
}

export default Team