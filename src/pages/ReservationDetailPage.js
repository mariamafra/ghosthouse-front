import React, { useEffect, useState } from 'react';
import Appbar from '../components/Appbar'
import { Button } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import ReservationDetail from '../components/ReservationDetail';
import axios from 'axios';
import { RESERVATIONS_URL } from "../endpoints";

const ReservationDetailPage = () => {
  let { id } = useParams();
  const [reserva, setReserva] = useState([])

  useEffect(() => {
    axios.get(`${RESERVATIONS_URL}/${id}`)
    .then(res => { 
        console.log('sim ', res)
        setReserva(res.data);
    })
    .catch(err => console.log(err))

}, [])

  return (
    <div>
      <Appbar />
      <ReservationDetail property={reserva} />
      <Button
            variant="contained"
            color="grey"
            style={{marginTop: '40px', marginBottom: '40px'}}
          >
            Confirmar Reservar
          </Button>
    </div>  
  );
};

export default ReservationDetailPage;