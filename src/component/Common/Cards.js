import React from 'react'
import { useNavigate } from "react-router-dom";
import'./Cards.css'



const Cards = (props) => {
  const navigate = useNavigate();

    const navigatefun = () => {
        navigate(`/${props.route}`)
    } 
  return (
    <div className="cards">
      <div className="card-body" onClick={navigatefun}>
        <h4 className="card-title">{props.cardName}</h4>
      </div>
      </div>
  )
}

export default Cards