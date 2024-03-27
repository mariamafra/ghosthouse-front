import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
import logo from "../imagem/gh.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import UserContext from "../UserContext";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Appbar() {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userType = user ? user.userType : "";

  const LOCATARIO = "LOCATARIO";

  const logout = () => {
    setUser({});
    localStorage.setItem("isLoggedIn", false);
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "80px", marginRight: "50px" }}
          />
          <Typography
            component={Link}
            to={"/"}
            variant="h6"
            sx={{ flexGrow: 1 }}
            className={classes.link}
          >
            GHOSTHOUSE
          </Typography>
          {isLoggedIn === "true" ? (
            <>
              {userType === LOCATARIO ? (
                <Typography
                  component={Link}
                  to="/my-reservations"
                  sx={{ mr: 10 }}
                  className={classes.link}
                >
                  Minhas reservas
                </Typography>
              ) : (
                <>
                  <Typography
                    component={Link}
                    to="/my-properties"
                    sx={{ mr: 10 }}
                    className={classes.link}
                  >
                    Meus imóveis
                  </Typography>
                  <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="add"
                    sx={{ mr: 10 }}
                  >
                    <Link to="/addProperty" className={classes.link}>
                      <AddIcon />
                    </Link>
                  </IconButton>{" "}
                </>
              )}
              <LogoutIcon
                size="large"
                edge="end"
                color="inherit"
                aria-label="add"
                onClick={logout}
              />
            </>
          ) : (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="add"
              sx={{ mr: 10 }}
            >
              <Link to="/login" className={classes.link}>
                <LoginIcon />
              </Link>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
