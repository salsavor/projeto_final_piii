import React from "react";
import {
  Box, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
} from "@mui/material"; 


const ContactPage = () => {
  return (

    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#fff" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: { xs: "300px", md: "100vh" },
            width: "100vh", 
            display: "flex", 

            backgroundImage:
              "url(https://i.ibb.co/tT2G1JZc/imagem-2025-06-23-022152451.png)",
            backgroundSize: "cover", 
            backgroundPosition: "center", 
          }}
        />
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: { xs: 6, md: 10 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#fff",
          }}
        >
          {/* Box que contém o formulário, limitando sua largura para melhor legibilidade */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%" },
              maxWidth: "800px", // aumente aqui para deixar o formulário mais largo
            }}
          >
            {/* Título "Contacte-nos" */}
            <Typography
              variant="h4" // Define o tamanho e estilo do texto como um h4
              fontWeight="bold" // Texto em negrito
              gutterBottom // Adiciona margem inferior (para espaçamento padrão com o próximo elemento)
              sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }} // Margem inferior de 4 unidades; alinhamento de texto responsivo
            >
              Contacte-nos
            </Typography>

            {/* Container do formulário usando Box e flexbox para espaçamento */}
            <Box
              component="form" // Renderiza este Box como um elemento <form> HTML
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3, // Espaçamento entre os campos do formulário (3 unidades)
              }}
            >
              {/* Campo Nome */}
              <TextField
                label="Nome *" // Texto do label
                variant="outlined" // Estilo do campo de texto (com borda)
                placeholder="Nome" // Texto de placeholder
                fullWidth // Ocupa 100% da largura disponível
                sx={{ width: "100%" }} // garante que o campo ocupe toda a largura do Box
                InputProps={{
                  sx: { borderRadius: 1.5 }, // Estilo da borda do input
                }}
              />
              {/* Campo Email */}
              <TextField
                label="Email *"
                variant="outlined"
                placeholder="email@email.com"
                fullWidth
                type="email" // Define o tipo do input como email para validação básica
                sx={{ width: "100%" }}
                InputProps={{
                  sx: { borderRadius: 1.5 },
                }}
              />
              {/* Campo Telefone */}
              <TextField
                label="Telefone *"
                variant="outlined"
                placeholder="Telefone"
                fullWidth
                sx={{ width: "100%" }}
                InputProps={{
                  sx: { borderRadius: 1.5 },
                }}
              />
              {/* Campo Assunto */}
              <TextField
                label="Assunto *"
                variant="outlined"
                placeholder="Assunto"
                fullWidth
                sx={{ width: "100%" }}
                InputProps={{
                  sx: { borderRadius: 1.5 },
                }}
              />
              {/* Campo Comentário (área de texto multilinha) */}
              <TextField
                label="Comentário *"
                variant="outlined"
                placeholder="Comentário"
                fullWidth
                multiline // Permite múltiplas linhas de texto
                minRows={4} // Altura mínima do campo em número de linhas
                sx={{ width: "100%" }}
                InputProps={{
                  sx: { borderRadius: 1.5 },
                }}
              />

              {/* Botão de Submissão */}
              <Button
                type="submit" // Define o botão como tipo submit para formulários
                variant="contained" // Estilo de botão "preenchido"
                sx={{
                  backgroundColor: "#0000aa", // Cor de fundo do botão (azul escuro)
                  color: "#fff", // Cor do texto do botão
                  fontWeight: "bold", // Texto em negrito
                  mt: 2, // Margem superior
                  py: 1.5, // Padding vertical
                  fontSize: "1rem", // Tamanho da fonte
                  borderRadius: 1.5, // Arredondamento da borda do botão
                  "&:hover": {
                    backgroundColor: "#000088", // Cor de fundo no hover
                  },
                }}
              >
                Submeter
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
