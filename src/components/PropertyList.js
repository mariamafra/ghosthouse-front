import React from "react";
import { Grid } from "@mui/material";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties }) => {
  return (
    <Grid container spacing={2}>
      {properties.map((property) => (
        <Grid item key={property.id} xs={12} sm={6} md={4} lg={3}>
          <PropertyCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyList;
