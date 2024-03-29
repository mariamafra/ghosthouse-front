import React, { useContext, useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import ReservaList from "../components/ReservaList";
import { Typography } from "@mui/material";
import axios from "axios";
import { RESERVATIONS_URL } from "../endpoints";
import UserContext from "../UserContext";

const MyReservations = () => {
  const [reservas, setReservas] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .put(`${RESERVATIONS_URL}/check-expired`)
      .then(() => {
        axios
          .get(`${RESERVATIONS_URL}/tenant/${user.id}`)
          .then((res) => {
            console.log("sim ", res);
            setReservas(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCancelReservation = async (reservationId) => {
    console.log(`ID ${reservationId}`);
    const confirmCancel = window.confirm(
      "Tem certeza que deseja cancelar essa reserva?"
    );

    if (confirmCancel) {
      await axios
        .delete(`${RESERVATIONS_URL}/${reservationId}`)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log("Error: ", err);
          alert(err.response.data.titulo);
        });
    }
  };

  return (
    <div>
      <Appbar />
      <Typography variant="h3" gutterBottom>
        Minhas reservas
      </Typography>
      {console.log(user.id)}
      {console.log(reservas)}
      <ReservaList
        reservas={reservas}
        onCancelReservation={handleCancelReservation}
      />
    </div>
  );
};

export default MyReservations;
