import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Box } from '@material-ui/core';

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
    justifyContent: 'sart',
    marginBottom: theme.spacing(1),
  },
  label: {
    fontWeight: 'bold',
    marginRight: theme.spacing(1),
  },
}));

const PropertyDetail = ({ property }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box border={1} p={3} borderRadius={8}>
        <Typography variant="h4" className={classes.title}>
          Property Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Address:</Typography>
              <Typography variant="h6">{property.address}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>City:</Typography>
              <Typography variant="h6">{property.city}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>State:</Typography>
              <Typography variant="h6">{property.state}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Zip Code:</Typography>
              <Typography variant="h6">{property.zipCode}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Number of Rooms:</Typography>
              <Typography variant="h6">{property.numberOfRooms}</Typography>
            </div>
            <div className={classes.propertyContainer}>
              <Typography variant="h6" className={classes.label}>Price:</Typography>
              <Typography variant="h6">{property.price}</Typography>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PropertyDetail;