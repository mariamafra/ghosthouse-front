import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

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

const ReservaList = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          {bookedProperties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" component="h2">
                    {property.name}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {property.address}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Booked Dates:
                    <ul>
                      {property.bookedDates.map((date, index) => (
                        <li key={index}>{date}</li>
                      ))}
                    </ul>
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