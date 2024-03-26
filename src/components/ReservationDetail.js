import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Box, Paper } from '@material-ui/core';
import dayjs from 'dayjs';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  imageContainer: {
    marginBottom: theme.spacing(2),
  },
  propertyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    marginBottom: theme.spacing(1),
  },
  label: {
    fontWeight: 'bold',
    marginRight: theme.spacing(1),
  },
  imageGridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ReservationDetail = ({ reserva, property }) => {
  const classes = useStyles();
  
  const toPascalCase = (str) => {
    if (!str) return "";
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const calculaTotal = () => {
    const startDate = dayjs(reserva.startDate);
    const endDate = dayjs(reserva.endDate);
    const daysDiff = endDate.diff(startDate, 'day');
    console.log('aa ', daysDiff)
    return property.valorDiaria * daysDiff;
  }

  return (
    <Container className={classes.root}>
      <Box border={1} p={3} borderRadius={8}>
        <Typography variant="h4" className={classes.title}>
          {property.nome}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Endereço:</Typography>
              <Typography variant="h6">{property.endereco}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Descrição:</Typography>
              <Typography variant="h6">{property.descricao}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Categoria:</Typography>
              <Typography variant="h6">{toPascalCase(property.categoria)}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Área:</Typography>
              <Typography variant="h6">{property.area}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Número de Quartos:</Typography>
              <Typography variant="h6">{property.quantidadeQuartos}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Valor Diária:</Typography>
              <Typography variant="h6">{property.valorDiaria}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Valor Total:</Typography>
              <Typography variant="h6">{calculaTotal()}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Data de entrada:</Typography>
              <Typography variant="h6">{dayjs(reserva.startDate).format('DD/MM/YYYY')}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Data de saida:</Typography>
              <Typography variant="h6">{dayjs(reserva.endDate).format('DD/MM/YYYY')}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.imageGridItem}>
            <Paper elevation={3}>
              <img src={property.imageUrl} alt={property.nome} className={classes.image} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ReservationDetail;