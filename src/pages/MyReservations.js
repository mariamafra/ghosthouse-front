import React, { useEffect, useState } from 'react';
import Appbar from '../components/Appbar'
import ReservaList from "../components/ReservaList";
import { CardContent, Typography } from "@mui/material";
import axios from 'axios';
import { RESERVATIONS_URL, PROPERTIES_URL } from '../endpoints';

const MyReservations = () => {
    const [reservas, setReservas] = useState([])

    useEffect(() => {
      axios.get(`${RESERVATIONS_URL}/tenant/2`)
      .then(res => { 
          console.log('sim ', res)
          setReservas(res.data);
      })
      .catch(err => console.log(err))
  }, [])
    return (
        <div>
            <Appbar />
            <Typography variant="h3" gutterBottom>
                Minhas reservas
            </Typography>
            <ReservaList reservas={reservas}/>
        </div>
  );
};

export default MyReservations;