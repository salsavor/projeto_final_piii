import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import "../../App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      // Podes redirecionar ou mostrar mensagem de sucesso aqui
    } catch (err) {
      setError("Login falhou!");
    }
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 5,
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
            backgroundColor: "#f5f5f5",
          }}
        >
          <br />
          <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
            Login
          </Typography>
          <form
            onSubmit={handleLogin}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              sx={{ width: "50%" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ width: "50%" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: "50%",
                backgroundColor: "darkblue",
                "&:hover": {
                  backgroundColor: "#001a66",
                },
                mt: 2,
              }}
            >
              Login
            </Button>
          </form>
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Typography variant="body2" style={{ marginTop: 10 }}>
            Não tem uma conta?{" "}
            <a href="/register" color="#06048c">
              Registo
            </a>
          </Typography>
          <br />
        </Box>
      </Container>
    </>
  );
}
