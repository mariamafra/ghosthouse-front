import React, { useState, useEffect } from "react";
import Property from "../components/Property";
import { useParams } from "react-router-dom";
import Appbar from "../components/Appbar";
import { PROPERTIES_URL } from "../endpoints";
import axios from "axios";

const EditPropertyPage = () => {
  let { id } = useParams();
  const [propertyData, setPropertyData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${PROPERTIES_URL}/${id}`);
        const propertyData = response.data;
        setPropertyData({
          nome: propertyData.nome,
          descricao: propertyData.descricao,
          quantidadeQuartos: propertyData.quantidadeQuartos,
          area: propertyData.area,
          categoria: propertyData.categoria,
          endereco: propertyData.endereco,
          valorDiaria: propertyData.valorDiaria,
          imageUrl: propertyData.imageUrl,
          idProprietario: propertyData.idProprietario,
        });
        console.log(propertyData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Appbar />
      <h1>Editar Propriedade</h1>
      {console.log(propertyData)}
      <Property
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        id={id}
        caller="edit"
      />
    </div>
  );
};

export default EditPropertyPage;
