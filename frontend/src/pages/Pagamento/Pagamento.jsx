import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
  InputAdornment,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

export default function Pagamento() {
  const [nome, setNome] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handlePagamento = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    // Simulação de validação simples
    if (
      nome.length < 3 ||
      numeroCartao.length !== 16 ||
      validade.length !== 5 ||
      cvv.length !== 3
    ) {
      setError("Por favor, preencha todos os campos corretamente.");
      return;
    }
    setSuccess("Pagamento efetuado com sucesso!");
    setNome("");
    setNumeroCartao("");
    setValidade("");
    setCvv("");
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "80vh",
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
            maxWidth: 600,
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
            <CreditCardIcon sx={{ color: "#fff", fontSize: 32 }} />
          </Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Pagamento
          </Typography>
          <form
            onSubmit={handlePagamento}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
            autoComplete="off"
          >
            <Grid container spacing={1} sx={{ width: "100%" }}>
              <Grid item xs={6}>
                <TextField
                  label="Nome no Cartão"
                  variant="outlined"
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
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Número do Cartão"
                  variant="outlined"
                  fullWidth
                  inputProps={{ maxLength: 16, inputMode: "numeric" }}
                  value={numeroCartao}
                  onChange={(e) =>
                    setNumeroCartao(e.target.value.replace(/\D/g, ""))
                  }
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Validade (MM/AA)"
                  variant="outlined"
                  fullWidth
                  inputProps={{ maxLength: 5 }}
                  value={validade}
                  onChange={(e) => setValidade(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  inputProps={{ maxLength: 3, inputMode: "numeric" }}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
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
                  Pagar
                </Button>
              </Grid>
            </Grid>
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
        </Paper>
      </Box>
    </Container>
  );
}
