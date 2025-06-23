import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAuth } from "../../contexts/AuthContext";

import "../../App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Registo() {
  const { register } = useAuth();
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nif, setNif] = React.useState("");
  const [ocupacao, setOcupacao] = React.useState("Cliente");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      // Podes adaptar para enviar nome, nif e ocupacao se o teu backend aceitar
      await register(nome, email, nif, ocupacao, password);
      setSuccess("Registo efetuado com sucesso!");
      setNome("");
      setEmail("");
      setNif("");
      setOcupacao("Cliente");
      setPassword("");
    } catch (err) {
      setError("Erro ao registar. Tente novamente.");
    }
  };

  return (
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
          Registo
        </Typography>
        <form
          onSubmit={handleRegister}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Nome"
            variant="outlined"
            margin="normal"
            sx={{ width: "50%" }}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            sx={{ width: "50%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Box sx={{ display: "flex", gap: 2, width: "50%" }}>
            <TextField
              label="NIF"
              variant="outlined"
              margin="normal"
              sx={{ flex: 1 }}
              value={nif}
              onChange={(e) => setNif(e.target.value)}
              required
            />
            <FormControl fullWidth margin="normal" sx={{ flex: 1 }}>
              <InputLabel id="ocupacao-label">Ocupação</InputLabel>
              <Select
                labelId="ocupacao-label"
                id="ocupacao-select"
                value={ocupacao}
                label="Ocupação"
                onChange={(e) => setOcupacao(e.target.value)}
              >
                <MenuItem value="Cliente">Cliente</MenuItem>
                <MenuItem value="Vendedor">Vendedor</MenuItem>
              </Select>
            </FormControl>
          </Box>
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
            }}
          >
            Registo
          </Button>
        </form>
        {success && (
          <Typography color="success.main" sx={{ mt: 2 }}>
            {success}
          </Typography>
        )}
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        <Typography variant="body2" style={{ marginTop: 10 }}>
          Tem uma conta?{" "}
          <a href="/login" color="#06048c">
            Login
          </a>
        </Typography>
        <br />
      </Box>
    </Container>
  );
}

const register = async (nome, email, nif, ocupacao, password) => {
  const response = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, nif, ocupacao, password }),
  });
  if (!response.ok) throw new Error("Erro ao registar");
  return await response.json();
};
