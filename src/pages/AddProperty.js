import React from "react";
import Appbar from '../components/Appbar'
import Property from "../components/Property";
import { Container, Typography } from "@mui/material";

function AddProperty() {
    return (
        <Container>
            <Appbar />
            <Typography variant="h3" gutterBottom>
                <Property />
            </Typography>
        </Container>
    );
}

export default AddProperty;