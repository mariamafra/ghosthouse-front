import React, { useEffect, useState } from "react";
import Appbar from '../components/Appbar'
import Calendar from "../components/Calendar";
import { Container, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PROPERTIES_URL, RESERVATIONS_URL } from "../endpoints";
import dayjs from "dayjs";

function ReservationCalender() {
    let { id } = useParams();
    const [dates, setDates] = useState([])
    const navigate  = useNavigate();

    useEffect(() => {
        axios.get(`${PROPERTIES_URL}/dates/${id}`)
        .then(res => { 
            console.log('sim ', res)
            setDates(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    const handleDatesSelected = (start, end) => {
        const reserva = {startDate: dayjs(start).format('YYYY-MM-DD'), endDate: dayjs(end).format('YYYY-MM-DD'), propertyId: parseInt(id), tenantId: 2}
        console.log(reserva)
        axios.post(`${RESERVATIONS_URL}`, reserva)
            .then((res) => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                alert(`Oops! algo deu errado...${err.response}`)
            })
    };

    return (
        <div>
            <Appbar />
            <Box sx={{mt:4}}>
                <Calendar dates={dates} onDatesSelected={handleDatesSelected}/>
            </Box>
        </div>
    );
}

export default ReservationCalender;