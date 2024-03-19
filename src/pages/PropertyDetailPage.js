import React from 'react';
import Appbar from '../components/Appbar'
import PropertyDetail from '../components/PropertyDetail';
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Container } from "@mui/material";
import {Link} from 'react-router-dom';Home.js

const property = {
  address: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zipCode: '12345',
  numberOfRooms: '3',
  price: '$500,000',
};

const PropertyDetailPage = () => {
  return (
    <Container>
      <Appbar />
      <PropertyDetail property={property} />
      <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            type="submit"
            style={{marginTop: '40px'}}
            component={Link} to={'/calendar-reservation'}
          >
            Reservar
          </Button>
    </Container>  
  );
};

export default PropertyDetailPage;