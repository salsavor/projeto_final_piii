import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "../../App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Login() {
  const [cliente, setCliente] = React.useState("Cliente");
  const handleChange = (event) => {
    setCliente(event.target.value);
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
        <TextField
          label="Nome"
          variant="outlined"
          margin="normal"
          sx={{ width: "50%" }}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{ width: "50%" }}
        />
        <Box sx={{ display: "flex", gap: 2, width: "50%" }}>
          <TextField
            label="NIF"
            variant="outlined"
            margin="normal"
            sx={{ flex: 1 }}
          />
          <FormControl fullWidth margin="normal" sx={{ flex: 1 }}>
            <InputLabel id="ocupacao-label">Ocupação</InputLabel>
            <Select
              labelId="ocupacao-label"
              id="ocupacao-select"
              value={cliente}
              label="Ocupação"
              onChange={handleChange}
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
        />
        <Button
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
