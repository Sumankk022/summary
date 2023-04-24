import React from 'react'
import learning from './learnings.jpeg'
import { Certificate_content } from '../content.js'
import './certifications.css'

const certifications = () => {
  return (
    <div>
      <div className='title'>
      <h1>My Certifications</h1>
      </div>

      <div className='certificate_img'>
        <img src={learning} alt='Team Img'/>
      </div>

      <div className='content'>
        <p>
        {Certificate_content[0]}
        <br/>
        
        <pre/>{Certificate_content[1]}
        </p>
      </div>
    </div>
  )
}

export default certifications