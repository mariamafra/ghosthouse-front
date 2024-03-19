import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const PropertyCard = ({ property }) => {
  const { title, description, price, location, imageUrl } = property;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '60px' }}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;