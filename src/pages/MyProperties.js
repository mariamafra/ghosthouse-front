import React from "react";
import Appbar from '../components/Appbar'
import PropertyList from "../components/PropertyList";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { PROPERTIES_URL } from '../endpoints';

function MyProperties() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        axios.get(`${PROPERTIES_URL}/proprietario/1`)
        .then(res => { 
            console.log('sim ', res)
            setProperties(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Appbar />
            <Typography variant="h3" gutterBottom sx={{ m: 2 }}>
                Meus imóveis
            </Typography>
            <Box sx={{ml:5}}>
                <PropertyList properties={properties} redirect="property"/>
            </Box>
        </div>
    );
}

export default MyProperties;