import React from "react";
import Appbar from '../components/Appbar'
import PropertyList from "../components/PropertyList";
import {Link} from 'react-router-dom';
import { Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
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
            <PropertyList properties={properties}/>
        </div>
    );
}

export default MyProperties;