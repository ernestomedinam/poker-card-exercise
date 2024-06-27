import React, { useState } from "react";
import { buildDeck, chooseRandomItem } from "../utils/helpers";
import { PokerCard } from "./PokerCard";

const Home = () => {
  const [deck, setDeck] = useState(buildDeck());
  const [tableCards, setTableCards] = useState([]);

  const drawCard = () => {
    // add id to buildDeck()
    // evaluate only the id when iterating
    const drawnCard = chooseRandomItem(deck);
    const deckWithRemovedCard = deck.filter((card) => card != drawnCard);
    setDeck(deckWithRemovedCard);
    setTableCards((prevTableCards) => [...prevTableCards, drawnCard]);
  };

  const sendBackToDeck = (cardToSendBack) => {
    setDeck((prevDeck) => [...prevDeck, cardToSendBack]);
    setTableCards((prevTableCards) =>
      prevTableCards.filter(
        (card) =>
          card.faceValue !== cardToSendBack.faceValue ||
          card.suit.label !== cardToSendBack.suit.label
      )
    );
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 h-100'>
      <div className='d-flex flex-wrap'>
        {tableCards.map((card, index) => (
          // wait for the onClick functionality, don't do at first
          <PokerCard key={index} card={card} onClick={sendBackToDeck} />
        ))}
      </div>

      <button className='btn btn-primary' onClick={drawCard}>
        Draw Card
      </button>
    </div>
  );
};

export default Home;
