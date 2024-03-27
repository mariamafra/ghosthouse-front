import React, { useState, useEffect } from 'react';
import Property from '../components/Property'; 
import {  Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Appbar from '../components/Appbar';
import { PROPERTIES_URL } from "../endpoints";
import axios from 'axios';

const EditPropertyPage = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [property, setProperty] = useState([])
    const [propertyData, setPropertyData] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${PROPERTIES_URL}/${id}`);
                const propertyData = response.data;
                setProperty(propertyData);
                setPropertyData({        
                    nome: propertyData.nome,
                    descricao: propertyData.descricao,
                    quantidadeQuartos: propertyData.quantidadeQuartos,
                    area: propertyData.area,
                    categoria: propertyData.categoria,
                    endereco: propertyData.endereco,
                    valorDiaria: propertyData.valorDiaria,
                    imageUrl: propertyData.imageUrl,
                    idProprietario: 1
                });
                console.log(propertyData);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
      }, [])

 
    const handleSubmit = async () => {
        console.log(`ID ${id}`);

        await axios.put(`${PROPERTIES_URL}/${id}`, propertyData)
            .then(res => { 
                navigate(`/propertyDetail/${id}`)
            })
            .catch(err => {
                console.log("Error: ", err)
                alert(err);
            });
    };

  return (
    <div>
        <Appbar />
      <h1>Editar Propriedade</h1>
      {console.log(propertyData)}
      <Property propertyData={propertyData} setPropertyData={setPropertyData} onSubmit={handleSubmit} />
      <Button variant="outlined" color="secondary" onClick={(handleSubmit)}>
        Salvar
      </Button>
      <Button variant="outlined" color="secondary" component={Link} to={`/propertyDetail/${id}`}>
        Cancelar
      </Button>
    </div>
  );
};

export default EditPropertyPage;