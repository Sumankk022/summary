import React from 'react'
import CardData from '../CardData.js'
import Cards from '../Common/Cards';
import './home.css'




const Home = () => {


  const showCard = (item) => {
    // console.log(item);
    return (
      <Cards
        cardName={item.cardName}
        route={item.route}
      />
    );
  };

  return (
    <div cardName="home_page">

    <div>
      {CardData.map(showCard)}
    </div>
    </div>
  )
}

export default Home;