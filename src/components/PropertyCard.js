import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { VisibilityOutlined, EditOutlined, DeleteIcon, DeleteOutline} from '@material-ui/icons';
import { PROPERTIES_URL } from '../endpoints';
import axios from 'axios';

const PropertyCard = ({ property, redirect }) => {
  const { id, nome, descricao, valorDiaria, endereco, imageUrl } = property;

  const handleCancelProperty = async (id) => {
    console.log(`ID ${id}`);
    const confirmCancel = window.confirm("Tem certeza que deseja deletar esse imovel?");

    if (confirmCancel) {
        await axios.delete(`${PROPERTIES_URL}/${id}`)
            .then(res => { 
                window.location.reload();
            })
            .catch(err => {
                console.log("Error: ", err)
                alert(err.response.data.titulo);
            });
    }
};

  const renderButton = () => {
    console.log(redirect)
    if (redirect === 'home') {
      console.log(redirect)
      return (
        <Button
          variant="contained"
          color="grey"
          startIcon={<VisibilityOutlined />}
          component={Link}
          to={`/propertyDetail/${id}`}
        >
          Visualizar
        </Button>
      );
    } else if (redirect === 'property') {
      return (
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteOutline />}
          onClick={() => handleCancelProperty(id)}
          style= {{backgroundColor: 'red', color: 'white'}}
        >
          Apagar
        </Button>
      );
    }
  };

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
      {renderButton()}
    </Card>
  );
};

export default PropertyCard;