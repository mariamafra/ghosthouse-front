import React, { useEffect, useState } from 'react';
import Appbar from '../components/Appbar'
import PropertyDetail from '../components/PropertyDetail';
import { Button, Grid } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { DeleteOutline } from '@material-ui/icons';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { PROPERTIES_URL, RESERVATIONS_URL } from "../endpoints";
import ReservaList from '../components/ReservaList';

const PropertyDetailPage = () => {
  let { id } = useParams();
  const [property, setProperty] = useState([])
  const [reservas, setReservas] = useState([])
  
  const fromMyProperties = localStorage.getItem('fromMyProperties');
  console.log(fromMyProperties)

    useEffect(() => {
      console.log("AQUIIIIII")
        axios.get(`${PROPERTIES_URL}/${id}`)
        .then(res => { 
            console.log('sim ', res)
            setProperty(res.data);
        })
        .catch(err => console.log(err))

        axios.get(`${RESERVATIONS_URL}/property/${id}`)
            .then(res => { 
                console.log('sim ', res);
                setReservas(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const handleCancelProperty = async (id) => {
      console.log(`ID ${id}`);
      const confirmCancel = window.confirm("Tem certeza que deseja deletar esse imovel?");
  
      if (confirmCancel) {
          await axios.delete(`${PROPERTIES_URL}/${id}`)
              .then(res => { 
                  window.location.reload();
              })
              .catch(err => {
                  console.log("Error: ", err)
                  alert(err.response.data.titulo);
              });
      }
  };

    const renderButton = () => {
      if (fromMyProperties === 'true') {
        return (
          <Grid container spacing={2} alignItems="center" justifyContent='center'>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteOutline />}
                onClick={() => handleCancelProperty(id)}
                style= {{backgroundColor: 'red', color: 'white', marginTop: '40px', marginBottom: '40px'}}
              >
                Apagar
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                style={{ marginTop: '40px', marginBottom: '40px' }}
                component={Link}
                to={`/editProperty/${id}`}
              >
                Editar
              </Button>
            </Grid>
        </Grid>
        );
      } else {
        return (
          <Button
            variant="contained"
            color="grey"
            startIcon={<AddCircleOutlineIcon />}
            type="submit"
            style={{marginTop: '40px', marginBottom: '40px'}}
            component={Link} to={`/calendar-reservation/${id}`}
          >
            Reservar
          </Button>
        );
      }
    };

  return (
    <div>
      <Appbar />
      <PropertyDetail property={property} />
      {renderButton()}
          {console.log("DENTRO DO RETURN" + fromMyProperties)}
          {fromMyProperties === 'true' ? 
            <ReservaList reservas={reservas}/>
          : null}
    </div>  
  );
};

export default PropertyDetailPage;