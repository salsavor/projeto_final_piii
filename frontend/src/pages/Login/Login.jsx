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

export default function Login() {
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
          Login
        </Typography>
        <TextField label="Email" variant="outlined"  margin="normal" sx={{ width: "50%" }}/>
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
          Login
        </Button>
        <Typography variant="body2" style={{ marginTop: 10}}>
          Não tem uma conta? <a href="/register" color="#06048c">Registo</a>
        </Typography>
        <br />
      </Box>
    </Container>
  );
}
