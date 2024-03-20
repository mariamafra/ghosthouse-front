import React from "react";
import Appbar from '../components/Appbar'
import Property from "../components/Property";
import { Container, Typography } from "@mui/material";

function AddProperty() {
    return (
        <div>
            <Appbar />
            <Typography variant="h3" gutterBottom>
                Adicionar novo imóveis
                <Property />
            </Typography>
        </div>
    );
}

export default AddProperty;