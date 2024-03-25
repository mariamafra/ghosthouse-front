import React, { useState } from 'react';
import { TextField, Button, Grid, Box, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { PROPERTIES_URL } from '../endpoints';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Property() {
  const navigate  = useNavigate();
  const [propertyData, setPropertyData] = useState({
    nome: '',
    descricao: '',
    quantidadeQuartos: '',
    area: '',
    categoria: '',
    endereco: '',
    valorDiaria: '',
    imageUrl: '',
    idProprietario: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(propertyData);

    axios.post(`${PROPERTIES_URL}`, propertyData)
        .then((res) => {
            console.log(res)
            navigate("/")
        })
        .catch(err => {
            console.log(err)
            alert(`Oops! algo deu errado...${err.response}`)
        })
  };

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="flex-start"
    minHeight="100vh"
  >
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome"
              name="nome"
              value={propertyData.nome}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descrição"
              name="descricao"
              value={propertyData.descricao}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Foto"
              name="imageUrl"
              value={propertyData.imageUrl}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="categoria-label">Categoria</InputLabel>
                <Select
                  labelId="categoria-label"
                  id="categoria"
                  name="categoria"
                  value={propertyData.categoria}
                  onChange={handleInputChange}
                >
                  <MenuItem value="CASA">Casa</MenuItem>
                  <MenuItem value="APARTAMENTO">Apartamento</MenuItem>
                  <MenuItem value="CHALE">Chalé</MenuItem>
                  <MenuItem value="CASTELO">Castelo</MenuItem>
                  <MenuItem value="FAZENDA">Fazenda</MenuItem>
                  <MenuItem value="HOTEL_ASSOMBRADO">Hotel</MenuItem>
                  <MenuItem value="LOFT">Loft</MenuItem>
                  <MenuItem value="MANSÃO">Mansão</MenuItem>
                  <MenuItem value="BARRACO">Barraco</MenuItem>
                  <MenuItem value="CONDOMINIO_FECHADO">Condomínio fechado</MenuItem>
                  <MenuItem value="CAVERNA">Caverna</MenuItem>
                  <MenuItem value="SOBRADO">Sobrado</MenuItem>
                  <MenuItem value="PENTHOUSE">Penthouse</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Endereço"
              name="endereco"
              value={propertyData.endereco}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Número de Quartos"
              type='number'
              name="quantidadeQuartos"
              value={propertyData.quantidadeQuartos}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Área"
              type='number'
              name="area"
              value={propertyData.area}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Valor Diária"
              type='number'
              name="valorDiaria"
              value={propertyData.valorDiaria}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="black"
              startIcon={<AddCircleOutlineIcon />}
              type="submit"
              style={{ marginTop: '40px' }}
            >
              Adicionar Propriedade
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  </Box>
  );
}

export default Property;