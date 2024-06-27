import React from "react";

export const PokerCard = ({ card, onClick }) => (
  <div
    className='poker-card'
    aria-label='poker card'
    onClick={() => onClick(card)}
  >
    <div
      className='suit top-suit'
      aria-label='top suit'
      style={{ color: card.suit.color }}
    >
      {card.suit.label}
    </div>
    <div className='face-value' aria-label='face value'>
      <h1 style={{ color: card.suit.color }}>{card.faceValue}</h1>
    </div>
    <div
      className='suit bottom-suit'
      aria-label='bottom suit'
      style={{ color: card.suit.color }}
    >
      {card.suit.label}
    </div>
  </div>
);
