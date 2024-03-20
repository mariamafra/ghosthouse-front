import React, { useEffect, useState } from 'react';
import Appbar from '../components/Appbar'
import PropertyList from "../components/PropertyList";
import { CardContent, Container, Typography } from "@mui/material";
import axios from 'axios';
import { RESERVATIONS_URL, PROPERTIES_URL } from '../endpoints';



<<<<<<< Updated upstream
const MyReservations = ({properties}) => {
=======
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
>>>>>>> Stashed changes
    return (
        <div>
            <Appbar />
            <Typography variant="h3" gutterBottom>
                Minhas reservas
            </Typography>
<<<<<<< Updated upstream
            <PropertyList properties={properties}/>
        </div>
=======
            {reservas.map((reserva) => ( 
              <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="body2" color="text.secondary">
          Valor Diária: {reserva.startDate}
        </Typography>
            <Typography variant="body2" color="text.secondary">
          Valor Diária: {reserva.endDate}
        </Typography></CardContent>
        ))}
        </Container>
>>>>>>> Stashed changes
  );
};

export default MyReservations;