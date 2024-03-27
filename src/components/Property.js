import React from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { PROPERTIES_URL } from "../endpoints";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Property = ({ propertyData, setPropertyData, id, caller }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("id ", propertyData.idProprietario);
    console.log(propertyData);

    if (caller === "add") {
      axios
        .post(`${PROPERTIES_URL}`, propertyData)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          alert(`Oops! algo deu errado...${err.response.data.title}`);
        });
    } else if (caller === "edit") {
      console.log(`ID ${id}`);

      axios
        .put(`${PROPERTIES_URL}/${id}`, propertyData)
        .then((res) => {
          navigate(`/propertyDetail/${id}`);
        })
        .catch((err) => {
          console.log("Error: ", err);
          alert(`Oops! algo deu errado...${err.response.data}`);
        });
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start">
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
                InputLabelProps={{ shrink: propertyData.nome ? true : false }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descrição"
                name="descricao"
                value={propertyData.descricao}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: propertyData.descricao ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Foto"
                name="imageUrl"
                value={propertyData.imageUrl}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: propertyData.imageUrl ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="categoria-label">Categoria</InputLabel>
                <Select
                  labelId="categoria-label"
                  id="categoria"
                  name="categoria"
                  value={propertyData.categoria || ""}
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
                  <MenuItem value="CONDOMINIO_FECHADO">
                    Condomínio fechado
                  </MenuItem>
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
                InputLabelProps={{
                  shrink: propertyData.endereco ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Número de Quartos"
                type="number"
                name="quantidadeQuartos"
                value={propertyData.quantidadeQuartos}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: propertyData.quantidadeQuartos ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Área"
                type="number"
                name="area"
                value={propertyData.area}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: propertyData.area ? true : false }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Valor Diária"
                type="number"
                name="valorDiaria"
                value={propertyData.valorDiaria}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: propertyData.valorDiaria ? true : false,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                style={{ marginTop: "40px", marginRight: "20px" }}
                component={Link}
                to={
                  caller === "add" ? "/my-properties" : `/propertyDetail/${id}`
                }
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="black"
                startIcon={<AddCircleOutlineIcon />}
                type="submit"
                style={{ marginTop: "40px" }}
              >
                {caller === "add"
                  ? "Adicionar Propriedade"
                  : "Editar Propriedade"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Property;
