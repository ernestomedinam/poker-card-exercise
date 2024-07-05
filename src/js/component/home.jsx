import React, { useState } from "react";
import { ReservationForm } from "./ReservationForm";
import { EMPTY_RESERVATION } from "../utils/helpers";
import { Reservations } from "./Reservations";

//create your first component
const Home = () => {
	const [reservations, setReservations] = useState([]);
	return (
		<div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
			<ReservationForm addReservation={(reservation) => {
				setReservations((prev) => ([...prev, reservation]));
			}} />
			<Reservations reservations={reservations} />
		</div>
	);
};

export default Home;
