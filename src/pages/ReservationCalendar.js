import React, { useEffect, useState } from "react";
import Appbar from '../components/Appbar'
import Calendar from "../components/Calendar";
import { Container, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

function Calender() {
    let { id } = useParams();
    const [dates, setDates] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8081/api/properties/dates/${id}`)
        .then(res => { 
            console.log('sim ', res)
            setDates(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Appbar />
            <Box sx={{mt:4}}>
                <Calendar dates={dates}/>
            </Box>
        </Container>
    );
}

export default Calender;