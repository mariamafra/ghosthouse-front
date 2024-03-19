import React from 'react';
import { Grid } from '@mui/material';
import PropertyCard from './PropertyCard';

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
  },
  // Add more properties as needed
];

const PropertyList = () => {
  return (
    <Grid container spacing={2}>
      {properties.map((property) => (
        <Grid item key={property.id} xs={12} sm={6} md={4} lg={3}>
          <PropertyCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyList;