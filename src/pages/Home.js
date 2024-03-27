import React from "react";
import Appbar from "../components/Appbar";
import PropertyList from "../components/PropertyList";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PROPERTIES_URL } from "../endpoints";

function Home() {
  const [properties, setProperties] = useState([]);
  localStorage.setItem("fromMyProperties", false);

  useEffect(() => {
    axios
      .get(PROPERTIES_URL)
      .then((res) => {
        console.log("sim ", res);
        setProperties(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Appbar />
      <Typography variant="h3" gutterBottom sx={{ m: 2 }}>
        Principais imóveis
      </Typography>
      <Box sx={{ ml: 5 }}>
        <PropertyList properties={properties} />
      </Box>
    </div>
  );
}

export default Home;
