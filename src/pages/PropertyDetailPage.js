import React, { useEffect, useState } from 'react';
import Appbar from '../components/Appbar'
import PropertyDetail from '../components/PropertyDetail';
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Container } from "@mui/material";
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { PROPERTIES_URL } from "../endpoints";
/*
const property = {
  address: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zipCode: '12345',
  numberOfRooms: '3',
  price: '$500,000',
};*/

const PropertyDetailPage = () => {
  let { id } = useParams();
  const [property, setProperty] = useState([])

    useEffect(() => {
        axios.get(`${PROPERTIES_URL}/${id}`)
        .then(res => { 
            console.log('sim ', res)
            setProperty(res.data);
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
      <Appbar />
      <PropertyDetail property={property} />
      <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            type="submit"
            style={{marginTop: '40px'}}
            component={Link} to={`/calendar-reservation/${id}`}
          >
            Reservar
          </Button>
    </div>  
  );
};

export default PropertyDetailPage;