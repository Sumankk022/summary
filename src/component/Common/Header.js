import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='header-main'>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    
      <div className='bar'> 
      <a className="navbar-brand" href="/">My Journey</a>
      <li className="nav-item">
        <a className="nav-link" href="/onboarding">Onboarding</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/team">Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/certifications">Certifications</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/events">Events</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/goals">Goals</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/fomo">Fomo</a>
      </li>
      </div>
    </ul>
    
  </div>
</nav>


    </div>
  )
}

export default Header;