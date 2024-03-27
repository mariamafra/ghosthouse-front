import React, { useContext } from "react";
import Appbar from "../components/Appbar";
import PropertyList from "../components/PropertyList";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { PROPERTIES_URL } from "../endpoints";
import UserContext from "../UserContext";

function MyProperties() {
  const [properties, setProperties] = useState([]);
  const { user } = useContext(UserContext);
  localStorage.setItem("fromMyProperties", true);

  useEffect(() => {
    axios
      .get(`${PROPERTIES_URL}/proprietario/${user.id}`)
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
        Meus imóveis
      </Typography>
      <Box sx={{ ml: 5 }}>
        <PropertyList properties={properties} />
      </Box>
    </div>
  );
}

export default MyProperties;
