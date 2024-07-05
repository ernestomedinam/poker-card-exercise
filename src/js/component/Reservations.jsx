import React from "react";
import PropTypes from "prop-types";

export const Reservations = ({reservations}) => {
    return (
        <div className="d-flex w-100">
            <table className="table w-100">
                <thead>
                    <tr>
                        <td>{"Full name"}</td>
                        <td>{"email"}</td>
                        <td>{"Seats"}</td>
                        <td>{"Service"}</td>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation, index) => (
                        <tr key={index}>
                            <td>{reservation.name}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.seats}</td>
                            <td>{reservation.service}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    );
};

Reservations.propTypes = {
    reservations: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            seats: PropTypes.number,
            service: PropTypes.string
        })
    )
};
