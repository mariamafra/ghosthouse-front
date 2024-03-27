import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";
import {
  TextField,
  Button,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import { AUTH_URL } from "../endpoints";
import UserContext from "../UserContext";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // AUTENTICAR USUARIO
    console.log("Email:", email);
    console.log("Password:", senha);
    const login = { email: email, senha: senha };
    axios
      .post(`${AUTH_URL}`, login)
      .then((res) => {
        const { id, nome, email, telefone, userType } = res.data;
        setUser({ id, nome, email, telefone, userType });
        localStorage.setItem("isLoggedIn", true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div>
      <Appbar />
      <Container component="main" maxWidth="xs">
        <div className={classes.container}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error ? (
            <Typography component="p" variant="caption" color="error">
              Usuário ou senha incorretos.
            </Typography>
          ) : null}

          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"
              label="senha"
              type="password"
              id="senha"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Typography variant="body2" color="textSecondary" align="center">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </Typography>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
