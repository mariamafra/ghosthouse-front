import React from "react";
import Appbar from '../components/Appbar'
import PropertyList from "../components/PropertyList";
import {Link} from 'react-router-dom';
import { Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/api/properties')
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
                Principais imóveis cadastrados
            </Typography>
            <PropertyList properties={properties}/>
        </div>
    );
}

export default Home;