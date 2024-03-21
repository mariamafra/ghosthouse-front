import React, { useEffect, useState } from 'react';
import Appbar from '../components/Appbar'
import PropertyDetail from '../components/PropertyDetail';
import { Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { PROPERTIES_URL, RESERVATIONS_URL } from "../endpoints";
import ReservaList from '../components/ReservaList';

const PropertyDetailPage = () => {
  let { id } = useParams();
  const [property, setProperty] = useState([])
  const [reservas, setReservas] = useState([])

    useEffect(() => {
        axios.get(`${PROPERTIES_URL}/${id}`)
        .then(res => { 
            console.log('sim ', res)
            setProperty(res.data);
        })
        .catch(err => console.log(err))

        axios.get(`${RESERVATIONS_URL}/property/${id}`)
            .then(res => { 
                console.log('sim ', res);
                setReservas(res.data);
            })
            .catch(err => console.log(err));
    }, [])

  return (
    <div>
      <Appbar />
      <PropertyDetail property={property} />
      <Button
            variant="contained"
            color="grey"
            startIcon={<AddCircleOutlineIcon />}
            type="submit"
            style={{marginTop: '40px'}}
            component={Link} to={`/calendar-reservation/${id}`}
          >
            Reservar
          </Button>

        <ReservaList reservas={reservas}/>
    </div>  
  );
};

export default PropertyDetailPage;