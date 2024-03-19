import React from "react";
import Appbar from '../components/Appbar'
import Calendar from "../components/Calendar";
import { Container, Box } from "@mui/material";

function Home() {
    return (
        <Container>
            <Appbar />
            <Box sx={{mt:4}}>
                <Calendar />
            </Box>
        </Container>
    );
}

export default Home;