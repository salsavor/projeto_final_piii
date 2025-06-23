import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';


const ContactPage = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#fff' }}>
      <Grid container>
        {/* Imagem à esquerda */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: { xs: '300px', md: '100vh' },
            backgroundImage: 'url(../../assets/casa.png)', // Substitua com o caminho real da sua imagem
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Formulário à direita */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: { xs: 4, md: 10 },
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#fff',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Contacte-nos
            </Typography>

            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <TextField
                label="Nome *"
                variant="outlined"
                placeholder="Nome"
                fullWidth
                InputProps={{
                  sx: { borderRadius: 1.5 },
                }}
              />
              <TextField
                label="Email *"
                variant="outlined"
                placeholder="email@email.com"
                fullWidth
                type="email"
                InputProps={{
                  sx: { borderRadius: 1.5 },
                }}
              />
              <TextField
                label="Telefone *"
                variant="outlined"
                placeholder="Telefone"
                fullWidth
                InputProps={{
                  sx: { borderRadius: 1.5 },
                }}
              />
              <TextField
                label="Assunto *"
                variant="outlined"
                placeholder="Assunto"
                fullWidth
                InputProps={{
                  sx: { borderRadius: 1.5 },
                }}
              />
              <TextField
                label="Comentário *"
                variant="outlined"
                placeholder="Comentário"
                fullWidth
                multiline
                minRows={4}
                InputProps={{
                  sx: { borderRadius: 1.5 },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#0000aa',
                  color: '#fff',
                  fontWeight: 'bold',
                  mt: 2,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#000088',
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