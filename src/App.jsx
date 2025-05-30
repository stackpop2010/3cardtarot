import React, { useState } from 'react';
import tarotImg from './ImgSrcs';

const App = () => {
  const [cards, setCards] = useState([]);

  const drawThreeCards = () => {
    const shuffled = [...tarotImg].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setCards(selected);
  };

  return (
    <div>
      <h1>Three Card Draw</h1>
      <h2>Happy Divining!!</h2>

      <button onClick={drawThreeCards}>Draw Three Cards</button>

    
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {cards.map((card, index) => (
          <div key={index}>
            <h3>{card.card}</h3>
            <img src={card.url} alt={card.card} style={{ width: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
