import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { RESERVATIONS_URL, PROPERTIES_URL } from '../endpoints';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(2),
  },
}));

const bookedProperties = [
  {
    id: 1,
    name: 'Property 1',
    address: '123 Main St, City, Country',
    bookedDates: ['2024-03-21', '2024-03-22', '2024-03-23'],
  },
  {
    id: 2,
    name: 'Property 2',
    address: '456 Elm St, Town, Country',
    bookedDates: ['2024-03-24', '2024-03-25'],
  },
  // Add more booked properties as needed
];

const ReservaList = ({reservas}) => {
    const classes = useStyles();
    const [properties, setProperties] = useState([])

    useEffect(() => {
      const getIds = async () => {
        console.log('aa')
        try {
          const propriedades = await Promise.all(
            reservas.map(async (reserva) => {
              const response = await axios.get(`${PROPERTIES_URL}/${reserva.propertyId}`);
              return response.data;
            })
          );
          setProperties(propriedades);
        } catch (error) {
          console.error('Error fetching properties:', error);
          setProperties([]); // Set empty array if there's an error
        }
      };
      console.log(properties)
      if (properties.length === 0) {
        getIds(); // Fetch properties when reservas change
      }
    }, [properties]); // Run when reservas change

  /*const getIds = (reservas) => {
    Promise.all(reservas.map(reserva => 
      axios.get(`${PROPERTIES_URL}/${reserva.propertyId}`)
        .then(res => res.data)
        .catch(err => {
          console.log('erro ', err);
          return null; // Return null if property retrieval fails
        })
    ))
    .then(propriedades => {
      console.log('aa ', propriedades);
      setProperties(propriedades);
      console.log('bb ', properties)
    })
    .catch(err => console.log('Promise.all error: ', err));
  }
*/
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          {reservas.map((reserva) => (
            <Grid item xs={12} sm={6} md={4} key={reserva.id}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2">
                  {properties.find(property => property.id == reserva.propertyId)?.nome}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                  {properties.find(property => property.id == reserva.propertyId)?.endereco}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Data Início: {reserva.startDate}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Data Final: {reserva.endDate}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

export default ReservaList;