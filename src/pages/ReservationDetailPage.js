import React, { useEffect, useState } from 'react';
import Appbar from '../components/Appbar'
import { Button } from '@material-ui/core';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import ReservationDetail from '../components/ReservationDetail';
import axios from 'axios';
import { PROPERTIES_URL, RESERVATIONS_URL } from "../endpoints";

const ReservationDetailPage = () => {
  let { id } = useParams();
  const location = useLocation();
  const [reserva, setReserva] = useState([])
  const [property, setProperty] = useState([])
  const navigate  = useNavigate();

  useEffect(() => {
    if (location.state && location.state.reserva) {
      setReserva(location.state.reserva);
      axios.get(`${PROPERTIES_URL}/${id}`)
        .then(res => { 
            console.log('sim ', res)
            setProperty(res.data);
        })
        .catch(err => console.log(err))
    } else {
      console.log("que tristrwe")
    }

}, [id, location.state])

  const handleConfirmReservation = () => {
    axios.post(`${RESERVATIONS_URL}`, reserva)
            .then((res) => {
                console.log(res)
                navigate("/my-reservations")
            })
            .catch(err => {
                console.log(err)
                alert(`Oops! algo deu errado...${err.response}`)
            })
  }

  return (
    <div>
      <Appbar />
      <ReservationDetail reserva={reserva} property={property}/>
      <Button
            variant="contained"
            color="grey"
            style={{marginTop: '40px', marginBottom: '40px'}}
            onClick={handleConfirmReservation}
          >
            Confirmar Reservar
          </Button>
    </div>  
  );
};

export default ReservationDetailPage;