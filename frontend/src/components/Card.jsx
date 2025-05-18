import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessTime from "@mui/icons-material/AccessTime";
import { purple } from "@mui/material/colors";
import { styled } from '@mui/material/styles';

export default function MediaCard() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./src/assets/house.webp"
        title="Casa Fodona"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Casa Fodona
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Esta casa é uma casa fodona, com um monte de coisa legal dentro dela.
          Ela é muito bonita e tem uma vista incrível.
        </Typography>
        <Typography variant="subtitle2" component="p">
          <AccessTime sx={{ width: 20 }} /> 2 Dias
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="inherit"
          size="small"
          variant="contained"
          className="buttoncompra"
        >
          Comprar
        </Button>
        <Button size="small" variant="outlined">
          Saber Mais
        </Button>
      </CardActions>
    </Card>
  );
}
