import React from "react";
import Appbar from '../components/Appbar'
import PropertyList from "../components/PropertyList";
import {Link} from 'react-router-dom';
import { Container, Typography } from "@mui/material";

function Home() {
    return (
        <Container>
            <Appbar />
            <Typography variant="h3" gutterBottom>
                Principais imóveis cadastrados
            </Typography>
            <PropertyList />
        </Container>
    );
}

export default Home;