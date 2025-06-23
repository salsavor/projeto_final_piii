import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const AboutPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Sobre a GS Real States: Onde Sonhos Criam Raízes
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: "auto", mb: 6 }}
        >
          Conheça a história por trás da GS Real States e descubra como a união
          de duas visões criou uma imobiliária única no coração de Coimbra.
        </Typography>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://i.ibb.co/FLZYMGyH/Sem-T-tulo-2.jpg"
              alt="Fundadores GS Real Estate"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                marginBottom: 4,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Gabriel e Salvador: Um encontro de visões
            </Typography>
            <Typography variant="body1" color="text.secondary">
              A GS Real Estate nasceu do encontro entre Gabriel Pereira, um
              brasileiro com alma empreendedora, e Salvador Viegas, um filho de
              Coimbra com profundo conhecimento local. Unidos pela paixão por
              pessoas e imóveis, criaram algo maior do que uma imobiliária: um
              propósito comum.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Em cafés acolhedores e ruas históricas, trocaram ideias, sonhos e
              planos. Gabriel trouxe energia e visão global; Salvador, raízes
              profundas e conhecimento local. Assim nasceu uma parceria onde
              confiança e autenticidade são pilares.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box
              component="img"
              src="https://i.ibb.co/0y9QRD5B/Sem-T-tulo-3.jpg"
              alt="Coimbra"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Mais que imóveis: construindo histórias
            </Typography>
            <Typography variant="body1" color="text.secondary">
              A GS Real States não se limita a intermediar transações. Nosso
              foco é entender as suas necessidades e ajudar a construir o seu
              futuro — seja com o lar ideal, um bom investimento ou o espaço
              perfeito para seu negócio.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Combinando a inovação de uma mente global com a tradição local,
              somos a ponte entre sonhos e realizações. Valorizamos a escuta
              ativa, a transparência e o toque humano em cada processo.
            </Typography>
          </Grid>
        </Grid>

        {/* Bloco final inspirador */}
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mt: 8 }}>
          <Typography
            variant="h6"
            fontWeight="medium"
            color="text.primary"
            gutterBottom
          >
            “Cada cliente é único e cada imóvel tem uma história para contar.
            Estamos aqui para te ajudar a escrever o próximo capítulo da sua.”
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
