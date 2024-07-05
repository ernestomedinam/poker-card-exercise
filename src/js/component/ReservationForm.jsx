import React, { useState } from "react";
import PropTypes from "prop-types";
import { EMPTY_RESERVATION } from "../utils/helpers";

export const ReservationForm = ({addReservation}) => {
    const [reservation, setReservation] = useState(EMPTY_RESERVATION);
    return (
        <form className="form">
            <div className="d-flex w-100 justify-content-around my-3">
                <input 
                    value={reservation.name} 
                    onChange={(event) => setReservation((prev) => ({...prev, name: event.target.value}))} 
                    className="form-control" 
                    placeholder="Full Name" 
                    type="text" />
                <input 
                    value={reservation.email} 
                    onChange={(event) => setReservation((prev) => ({...prev, email: event.target.value}))} 
                    className="form-control" 
                    placeholder="email address" 
                    type="email" />
                <input 
                    value={reservation.seats} 
                    onChange={(event) => setReservation((prev) => ({...prev, seats: parseInt(event.target.value)}))} 
                    className="form-control" 
                    placeholder="Seats" 
                    type="number" />
                <select 
                    className="form-select" 
                    value={reservation.service} 
                    onChange={(event) => setReservation((prev) => ({...prev, service: event.target.value}))}>
                    <option value="" label="Select one" disabled hidden />
                    <option value="vip" label="VIP" />
                    <option value="regular" label="Regular" />
                </select>
            </div>
            <div className="d-flex w-100 justify-content-center my-4">
                <button type="button" className="btn btn-primary" onClick={(event) => {
                    addReservation(reservation);
                    setReservation(EMPTY_RESERVATION);
                }}>
                    {"add reservation"}
                </button>
            </div>
        </form>
    );
};

ReservationForm.propTypes = {
    addReservation: PropTypes.func
};
