import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom';
import logo from '../imagem/gh.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ width: '80px', marginRight: '50px' }} />
          <Typography component={Link} to={'/'} variant="h6" sx={{ flexGrow: 1 }} className={classes.link}>
            GHOSTHOUSE
          </Typography>
          <Typography component={Link} to='/my-reservations' sx={{mr:10}} className={classes.link}> 
            Minhas reservas
          </Typography>
          <Typography component={Link} to='/my-properties' sx={{mr:10}} className={classes.link}> 
            Minhas propriedades
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="add"
          >
            <Link to='/addProperty' className={classes.link}><AddIcon /></Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
