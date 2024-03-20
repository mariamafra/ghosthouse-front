import React from 'react';
import Appbar from '../components/Appbar'
import ReservaList from "../components/ReservaList";
import { Typography } from "@mui/material";

const MyReservations = () => {
    return (
        <div>
            <Appbar />
            <Typography variant="h3" gutterBottom>
                Minhas reservas
            </Typography>
            <ReservaList />
        </div>
  );
};

export default MyReservations;