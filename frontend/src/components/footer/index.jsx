import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Sobre Nós
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A GS Real Estate é uma agência imobiliária líder <br />
                especializada em imóveis residenciais e comerciais.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contacta-nos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rua A, 123
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: gsrealestate@estate.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Telefone: +351 239 989 898
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Redes Sociais
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit">GS Real Estate</Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
