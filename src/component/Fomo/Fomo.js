import React from 'react'
import fomo from './fomo.png'
import { Fomo_content } from '../content.js'
import './Fomo.css'

const Fomo = () => {
  return (
    <div>
      <div className='title'>
      <h1>Fomo(UniteBI)</h1>
      </div>

      <div className='img'>
        <img src={fomo} alt='Fomo Img'/>
      </div>

      <div className='content'>
        <p>
        {Fomo_content[0]}
        <br/>
        </p>
      </div>
    </div>
  )
}

export default Fomo