import React, { useState } from 'react';
import { TextField, Button, Grid, Box, InputLabel, Select, MenuItem } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Property() {
  const [houseData, setHouseData] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
    numberOfRooms: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHouseData({ ...houseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission here
    console.log(houseData);
  };

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={houseData.address}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={houseData.description}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="categoria-label">Categoria</InputLabel>
            <Select
              fullWidth
              labelId="categoria-label"
              id="categoria"
              value={houseData.category}
              onChange={handleInputChange} // assuming this is your handler function
            >
              <MenuItem value="Mansão">Mansão</MenuItem>
              <MenuItem value="Barraco">Barraco</MenuItem>
              <MenuItem value="Condomínio fechado">Condomínio fechado</MenuItem>
              <MenuItem value="Caverna">Caverna</MenuItem>
              <MenuItem value="Sobrado">Sobrado</MenuItem>
              <MenuItem value="Penthouse">Penthouse</MenuItem>
            </Select>
          </Grid>
          <Grid item sx={{mt:50}} xs={12} sm={6}>
            <TextField
              fullWidth
              label="Zip Code"
              name="zipCode"
              value={houseData.zipCode}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Number of Rooms"
              name="numberOfRooms"
              value={houseData.numberOfRooms}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={houseData.price}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              type="submit"
              style={{ marginTop: '40px' }}
            >
              Add Property
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  </Box>
  );
}

export default Property;