import React from 'react';
import './onboarding.css';
import onboarding from './onboarding.jpg'
import {onboarding_content} from "../content.js"

const Onboarding = () => {
  return (
    <div>
      <div className='title'>
      <h1>My Onboarding to MB Family</h1>
      </div>

      <div className='img'>
        <img src={onboarding} alt='Onboarding Img'/>
      </div>

      <div className='content'>
        <p>
        {onboarding_content[0]}
        <br/>
        
        <pre/>{onboarding_content[1]}
        </p>
      </div>
    </div>
  )
}

export default Onboarding;