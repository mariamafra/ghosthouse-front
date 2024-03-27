import React, { useState } from "react";
import Appbar from '../components/Appbar'
import Property from "../components/Property";
import { Typography } from "@mui/material";

function AddProperty() {
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

    return (
        <div>
            <Appbar />
            <Typography variant="h3" gutterBottom style={{marginTop: '40px'}}>
                Adicionar novo imóveis
                <Property propertyData={propertyData} setPropertyData={setPropertyData}/>
            </Typography>
        </div>
    );
}

export default AddProperty;