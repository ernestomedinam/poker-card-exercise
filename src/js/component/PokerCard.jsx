import React from "react";
import PropTypes from "prop-types";

export const PokerCard = (props) => {
    return (
        <div className="poker-card" style={{
            color: props.card.suit.color
        }}>
            <div className="suit top-suit">
                <span>{props.card.suit.label}</span>
            </div>
            <div className="face-value">
                <h1>{props.card.faceValue}</h1>
            </div>
            <div className="suit bottom-suit">
                <span>{props.card.suit.label}</span>
            </div>
        </div>
    );
};

PokerCard.propTypes = {
    card: PropTypes.shape({
        faceValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        suit: PropTypes.object
    })
};
