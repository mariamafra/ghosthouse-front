import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import { PROPERTIES_URL } from '../endpoints';
import axios from 'axios';
import dayjs from 'dayjs';
import { CancelOutlined } from '@material-ui/icons';

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

const ReservaList = ({reservas, onCancelReservation }) => {
    const classes = useStyles();
    const [properties, setProperties] = useState([])

    useEffect(() => {
      const getIds = async () => {
        try {
          const propriedades = await Promise.all(
            reservas.map(async (reserva) => {
              const response = await axios.get(`${PROPERTIES_URL}/${reserva.propertyId}`);
              return response.data;
            })
          );
          setProperties(propriedades);
        } catch (error) {
          console.error('Error:', error);
          setProperties([]);
        }
      };
      console.log(properties)
      if (properties.length === 0) {
        getIds();
      }
    }, [properties]);

    const toPascalCase = (str) => {
      if (!str) return "";
      return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
    };

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
                    Status: {toPascalCase(reserva.status)}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Data Início: {dayjs(reserva.startDate).format('DD/MM/YYYY')}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Data Final: {dayjs(reserva.endDate).format('DD/MM/YYYY')}
                  </Typography>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<CancelOutlined />}
                  type="submit"
                  style={{marginTop: '40px'}}
                  onClick={() => onCancelReservation(reserva.id)}
                >
                  Cancelar Reserva
                </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

export default ReservaList;