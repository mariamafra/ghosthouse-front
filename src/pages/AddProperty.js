import React, { useContext, useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Property from "../components/Property";
import { Typography } from "@mui/material";
import UserContext from "../UserContext";

function AddProperty() {
  const { user } = useContext(UserContext);
  const [propertyData, setPropertyData] = useState({
    nome: "",
    descricao: "",
    quantidadeQuartos: "",
    area: "",
    categoria: "",
    endereco: "",
    valorDiaria: "",
    imageUrl: "",
    idProprietario: user.id,
  });

  return (
    <div>
      <Appbar />
      <Typography variant="h3" gutterBottom style={{ marginTop: "40px" }}>
        Adicionar novo imóveis
        <Property
          propertyData={propertyData}
          setPropertyData={setPropertyData}
          caller="add"
        />
      </Typography>
    </div>
  );
}

export default AddProperty;
