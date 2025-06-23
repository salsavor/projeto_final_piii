import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Breadcrumbs,
  Link,
  IconButton,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  KingBed as KingBedIcon,
  Bathtub as BathtubIcon,
  SquareFoot as SquareFootIcon,
  Garage as GarageIcon,
  LocalLaundryService as LaundryIcon,
  Thermostat as ThermostatIcon,
  Wc as WcIcon,
  Balcony as BalconyIcon,
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
  Apartment as ApartmentIcon,
  House as HouseIcon,
} from '@mui/icons-material';

// --- Dados de Exemplo para o Imóvel (simulando uma API ou props) ---
const propertyData = {
  id: 'GS001',
  type: 'Moradia T3',
  address: 'Rua da Felicidade, 123',
  city: 'Coimbra',
  parish: 'Santa Clara e Castelo Viegas', // Exemplo de Freguesia em Coimbra
  price: '450.000 €',
  area: '250', // m²
  bedrooms: 3,
  bathrooms: 2,
  wc: 1, // Lavabos
  garage: true,
  balcony: true,
  laundryRoom: true,
  heating: true,
  description: `
    Descubra o seu novo lar nesta magnífica moradia T3 localizada na encantadora cidade de Coimbra. 
    Com uma arquitetura moderna e acabamentos de alta qualidade, esta propriedade oferece o conforto 
    e a tranquilidade que a sua família merece. 
    
    A moradia é composta por três quartos espaçosos, um deles suite com casa de banho privativa, 
    duas casas de banho adicionais e um lavabo social. A sala de estar é ampla e luminosa, 
    com acesso direto a um jardim privativo, ideal para momentos de lazer e convívio. 
    A cozinha, totalmente equipada com eletrodomésticos de última geração, convida à criação de memórias culinárias.
    
    Dispõe ainda de garagem para dois carros, lavandaria independente, aquecimento central e painéis solares para maior eficiência energética. 
    Situada numa zona residencial calma, mas com excelentes acessos a serviços, escolas, transportes públicos e ao centro da cidade. 
    Uma oportunidade única para viver com qualidade de vida em Coimbra.
  `,
  images: [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ºº',
    'https://images.unsplash.com/photo-1512917774080-bd792379fed0?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1583840788102-15f5d81b1f9b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1502672260266-de60775a40e0?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1494526585095-c4146039f605?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  agent: {
    name: 'Ana Sofia Rodrigues',
    title: 'Consultora Imobiliária',
    phone: '+351 912 345 678',
    email: 'ana.rodrigues@gsrealstates.pt',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg', // Foto fictícia
  },
  // Coordenadas aproximadas para Coimbra (para o mapa)
  mapCoordinates: {
    lat: 40.2056,
    lng: -8.4196,
  },
};

const PropertyDetailPage = () => {
  // Placeholder para a lógica de carregamento do mapa (usaria uma biblioteca como Leaflet ou Google Maps React)
  const renderMap = (coords) => (
    <Box sx={{ width: '100%', height: '300px', bgcolor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#757575', borderRadius: 1 }}>
      <Typography variant="body2">Mapa da localização</Typography>
      {/* Aqui você integraria uma biblioteca de mapas, por exemplo: */}
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_Maps_API_KEY" }}
        defaultCenter={{ lat: coords.lat, lng: coords.lng }}
        defaultZoom={14}
      >
        <LocationOnIcon lat={coords.lat} lng={coords.lng} color="error" fontSize="large" />
      </GoogleMapReact> */}
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs (Migalhas de Pão) */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/imoveis">
          Imóveis
        </Link>
        <Typography color="text.primary">{propertyData.type}</Typography>
      </Breadcrumbs>

      {/* Título, Preço e Localização */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          {propertyData.type} - {propertyData.city}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ mb: 1, fontWeight: 'bold' }}>
          {propertyData.price}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationOnIcon fontSize="small" />
          {propertyData.address}, {propertyData.parish}, {propertyData.city}
        </Typography>
      </Box>

      {/* Galeria de Imagens */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              height: '450px', // Altura da imagem principal
              backgroundImage: `url(${propertyData.images[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            {propertyData.images.slice(1, 5).map((img, index) => ( // Exibe as 4 próximas imagens
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    height: '110px', // Altura das miniaturas
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 1,
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                />
              </Grid>
            ))}
            {propertyData.images.length > 5 && ( // Se houver mais imagens, adicione um botão "ver mais"
              <Grid item xs={6}>
                <Box
                  sx={{
                    height: '110px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(0, 0, 0, 0.05)',
                    borderRadius: 1,
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    +{propertyData.images.length - 5} Fotos
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      {/* Conteúdo Principal e Barra Lateral */}
      <Grid container spacing={4}>
        {/* Conteúdo Principal do Imóvel */}
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: '#f9f9f9', mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Descrição do Imóvel
            </Typography>
            <Typography variant="body1" paragraph>
              {propertyData.description}
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Características
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    {propertyData.type.includes('Moradia') ? <HouseIcon color="primary" /> : <ApartmentIcon color="primary" />}
                  </ListItemIcon>
                  <ListItemText primary={`Tipo: ${propertyData.type}`} />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <SquareFootIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={`Área Bruta: ${propertyData.area} m²`} />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <KingBedIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={`${propertyData.bedrooms} Quartos`} />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <BathtubIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={`${propertyData.bathrooms} Casas de Banho`} />
                </ListItem>
              </Grid>
              {propertyData.wc && (
                <Grid item xs={12} sm={6}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <WcIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={`${propertyData.wc} Lavabos`} />
                  </ListItem>
                </Grid>
              )}
              {propertyData.garage && (
                <Grid item xs={12} sm={6}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <GarageIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Garagem" />
                  </ListItem>
                </Grid>
              )}
              {propertyData.balcony && (
                <Grid item xs={12} sm={6}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <BalconyIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Varanda" />
                  </ListItem>
                </Grid>
              )}
              {propertyData.laundryRoom && (
                <Grid item xs={12} sm={6}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <LaundryIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Lavandaria" />
                  </ListItem>
                </Grid>
              )}
              {propertyData.heating && (
                <Grid item xs={12} sm={6}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <ThermostatIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Aquecimento Central" />
                  </ListItem>
                </Grid>
              )}
              {/* Adicionar mais características conforme necessário */}
            </Grid>
          </Paper>

          {/* Mapa da Localização */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: '#f9f9f9' }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Localização
            </Typography>
            {renderMap(propertyData.mapCoordinates)}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Endereço aproximado para referência. Para detalhes, contacte o agente.
            </Typography>
          </Paper>
        </Grid>

        {/* Barra Lateral (Agente, Simulador de Crédito) */}
        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'sticky', top: 20, /* Ajuste para o padding do header, se houver */ }}>
            {/* Cartão do Agente */}
            <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Fale com o Agente
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  component="img"
                  src={propertyData.agent.photo}
                  alt={propertyData.agent.name}
                  sx={{ width: 60, height: 60, borderRadius: '50%', mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {propertyData.agent.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {propertyData.agent.title}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                fullWidth
                sx={{ mb: 1.5, backgroundColor: '#0000aa', '&:hover': { backgroundColor: '#000088' } }}
                href={`tel:${propertyData.agent.phone.replace(/\s/g, '')}`}
              >
                Ligar ({propertyData.agent.phone})
              </Button>
              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                fullWidth
                sx={{ mb: 1.5, borderColor: '#25D366', color: '#25D366', '&:hover': { borderColor: '#1DA851', color: '#1DA851', bgcolor: 'rgba(37, 211, 102, 0.05)' } }}
                href={`https://wa.me/${propertyData.agent.phone.replace(/\s/g, '').replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Button>
              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                fullWidth
                sx={{ borderColor: '#0000aa', color: '#0000aa', '&:hover': { borderColor: '#000088', color: '#000088', bgcolor: 'rgba(0, 0, 170, 0.05)' } }}
                href={`mailto:${propertyData.agent.email}`}
              >
                Enviar Email
              </Button>
            </Paper>

            {/* Simulador de Crédito (Simplificado) */}
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Simulador de Crédito
              </Typography>
              <TextField
                label="Valor do Imóvel"
                variant="outlined"
                fullWidth
                margin="normal"
                value={propertyData.price}
                disabled
              />
              <TextField
                label="Entrada (€)"
                variant="outlined"
                fullWidth
                margin="normal"
                defaultValue="50000" // Valor de exemplo
              />
              <TextField
                label="Prazo (anos)"
                variant="outlined"
                fullWidth
                margin="normal"
                defaultValue="30" // Valor de exemplo
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: '#0000aa', '&:hover': { backgroundColor: '#000088' } }}
              >
                Simular
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block', textAlign: 'center' }}>
                *Simulação meramente indicativa. Consulte o seu banco.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PropertyDetailPage;