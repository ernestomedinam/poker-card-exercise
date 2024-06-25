export function drawRandomCard() {
    return buildPokerCardObject(
        chooseRandomItem(faceValues),
        chooseRandomItem(suits)
    );
};

export function chooseRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
};

export function buildPokerCardObject(faceValue, suit) {
    return {
        faceValue: faceValue,
        suit: {
            label: suit,
            color: ["♥", "♦"].includes(suit)
                ? "red"
                : "black"
        }
    };
};

const faceValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♥", "♦", "♠", "♣"];
