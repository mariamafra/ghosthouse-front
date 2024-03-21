import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom';
import logo from '../imagem/gh.jpg'

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ width: '80px', marginRight: '50px' }} />
          <Typography component={Link} to={'/'} variant="h6" sx={{ flexGrow: 1 }} style={{ textDecoration: 'none', color: 'inherit' }}>
            GHOSTHOUSE
          </Typography>
          <Typography component={Link} to='/my-reservations' sx={{mr:10, textDecoration: 'none', color: 'inherit'}}> 
            Minhas reservas
          </Typography>
          <Typography component={Link} to='/my-properties' sx={{mr:10, textDecoration: 'none', color: 'inherit'}}> 
            Minhas propriedades
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="add"
          >
            <Link to='/addProperty' style={{ color: 'inherit' }}><AddIcon /></Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
