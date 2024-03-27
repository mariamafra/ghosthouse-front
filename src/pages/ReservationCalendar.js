import React, { useEffect, useState } from "react";
import Appbar from '../components/Appbar'
import Calendar from "../components/Calendar";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PROPERTIES_URL } from "../endpoints";
import dayjs from "dayjs";
import { useContext } from "react";
import UserContext from "../UserContext";

function ReservationCalender() {
    let { id } = useParams();
    const { user } = useContext(UserContext);
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
        const reserva = {startDate: dayjs(start).format('YYYY-MM-DD'), endDate: dayjs(end).format('YYYY-MM-DD'), propertyId: parseInt(id), tenantId: user.id}
        console.log(reserva)
        navigate(`/reservation-confirmation/${id}`, { state: { reserva } });
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