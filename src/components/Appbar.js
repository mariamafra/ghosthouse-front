import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component={Link} to={'/'} variant="h6" sx={{ flexGrow: 1 }} style={{ textDecoration: 'none', color: 'inherit' }}>
            GHOSTHOUSE
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
