import React, { useState } from "react";
import { buildDeck, chooseRandomItem } from "../utils/helpers";
import { PokerCard } from "./PokerCard";

const AdvancedState = () => {
  const [gameState, setGameState] = useState(() => {
    return {
      deck: buildDeck(),
      tableCards: [],
    };
  });

  const drawCard = () => {
    const drawnCard = chooseRandomItem(gameState.deck);
    const deckWithRemovedCard = gameState.deck.filter(
      (card) => card != drawnCard
    );

    setGameState((prevState) => {
      return {
        deck: deckWithRemovedCard,
        tableCards: [...prevState.tableCards, drawnCard],
      };
    });
  };

  const sendBackToDeck = (cardToSendBack) => {
    setGameState((prevState) => ({
      deck: [...prevState.deck, cardToSendBack],
      tableCards: prevState.tableCards.filter(
        (card) =>
          card.faceValue !== cardToSendBack.faceValue ||
          card.suit.label !== cardToSendBack.suit.label
      ),
    }));
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 h-100'>
      <div className='d-flex flex-wrap'>
        {gameState.tableCards.map((card, index) => (
          <PokerCard key={index} card={card} onClick={sendBackToDeck} />
        ))}
      </div>

      <button className='btn btn-primary' onClick={drawCard}>
        Generate Card
      </button>
    </div>
  );
};

export default AdvancedState;
