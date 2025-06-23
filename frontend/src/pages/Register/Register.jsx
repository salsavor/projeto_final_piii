import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Typography, Paper, InputAdornment } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BadgeIcon from "@mui/icons-material/Badge";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
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
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", 
          p: 0,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            p: 5,
            borderRadius: 4,
            width: "100%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            boxShadow: "0 8px 32px 0 rgba(31,38,135,0.15)",
          }}
        >
          <Box
            sx={{
              background: "#1976d2",
              borderRadius: "50%",
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <LockOutlinedIcon sx={{ color: "#fff", fontSize: 32 }} />
          </Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Registo
          </Typography>
          <form
            onSubmit={handleRegister}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
            autoComplete="off"
          >
            <TextField
              label="Nome"
              variant="outlined"
              margin="normal"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
              <TextField
                label="NIF"
                variant="outlined"
                margin="normal"
                fullWidth
                value={nif}
                onChange={(e) => setNif(e.target.value)}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BadgeIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="ocupacao-label">Ocupação</InputLabel>
                <Select
                  labelId="ocupacao-label"
                  id="ocupacao-select"
                  value={ocupacao}
                  label="Ocupação"
                  onChange={(e) => setOcupacao(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <WorkOutlineIcon color="primary" />
                    </InputAdornment>
                  }
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
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{
                mt: 2,
                fontWeight: "bold",
                letterSpacing: 1,
                borderRadius: 2,
                boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.15)",
              }}
            >
              Registar
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
          <Typography variant="body2" sx={{ mt: 2 }}>
            Já tem uma conta?{" "}
            <a
              href="/login"
              style={{ color: "#1976d2", fontWeight: "bold" }}
            >
              Login
            </a>
          </Typography>
        </Paper>
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
