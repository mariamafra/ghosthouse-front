import React from 'react';
import Appbar from '../components/Appbar'
import PropertyList from "../components/PropertyList";
import { Container, Typography } from "@mui/material";



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

const MyReservations = ({properties}) => {
    return (
        <Container>
            <Appbar />
            <Typography variant="h3" gutterBottom>
                Minhas reservas
            </Typography>
            <PropertyList properties={properties}/>
        </Container>
  );
};

export default MyReservations;