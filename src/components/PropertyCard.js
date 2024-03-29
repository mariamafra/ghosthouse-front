import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { VisibilityOutlined } from '@material-ui/icons';

const PropertyCard = ({ property }) => {
  const { id, nome, descricao, valorDiaria, endereco, imageUrl } = property;
  const isLoggedIn = localStorage.getItem("isLoggedIn")

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={nome}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          {nome}
        </Typography>
        <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '60px' }}>
          <Typography variant="body2" color="text.secondary">
            {descricao}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Valor Diária: {valorDiaria}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Endereço: {endereco}
        </Typography>
      </CardContent>
      {isLoggedIn === 'true' ? 
        <Button
        variant="contained"
        color="grey"
        startIcon={<VisibilityOutlined />}
        component={Link}
        to={`/propertyDetail/${id}`}
      >
        Visualizar
      </Button>
        : 
        <Button
          variant="contained"
        //  style={/* TODO - DEIXAR CINZA CLARO */}
          startIcon={<VisibilityOutlined />}
          onClick={() => alert("Faça login para poder exibir detalhes do imóvel!")}
        >
          Visualizar
        </Button>
      }
      
    </Card>
  );
};

export default PropertyCard;