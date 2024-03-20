import React, { useEffect, useState } from 'react';
import Appbar from '../components/Appbar'
import ReservaList from "../components/ReservaList";
import { CardContent, Typography } from "@mui/material";
import axios from 'axios';
import { RESERVATIONS_URL, PROPERTIES_URL } from '../endpoints';



const properties = [
  {
    id: 1,
    title: 'Beautiful House',
    description: 'A stunning property with scenic views.',
    price: '$500,000',
    location: 'City, Country',
    imageUrl: 'https://example.com/house1.jpg',
  },
  {
    id: 2,
    title: 'Cozy Apartment',
    description: 'A comfortable apartment in the heart of the city.',
    price: '$300,000',
    location: 'City, Country',
    imageUrl: 'https://example.com/apartment1.jpg',
  }
];

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
            <ReservaList />
        </div>
  );
};

export default MyReservations;