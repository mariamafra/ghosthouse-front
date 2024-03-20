import React from 'react';
import Appbar from '../components/Appbar'
import PropertyList from "../components/PropertyList";
import { Container, Typography } from "@mui/material";



const MyReservations = ({properties}) => {
    return (
        <div>
            <Appbar />
            <Typography variant="h3" gutterBottom>
                Minhas reservas
            </Typography>
            <PropertyList properties={properties}/>
        </div>
  );
};

export default MyReservations;