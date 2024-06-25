import React from "react";
import {drawRandomCard} from "../utils/helpers";

//create your first component
const Home = () => {
	const card = drawRandomCard();
	return (
		<div className="d-flex justify-content-center align-items-center w-100 h-100">
			<div className="poker-card" style={{
				color: card.suit.color
			}}>
				<div className="suit top-suit">
					<span>{card.suit.label}</span>
				</div>
				<div className="face-value">
					<h1>{card.faceValue}</h1>
				</div>
				<div className="suit bottom-suit">
					<span>{card.suit.label}</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
