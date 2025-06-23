import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Box,
  TextField,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Snackbar,
  Alert,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';


const mockUserProfile = {
  name: 'Gabriel Pereira',
  email: 'gabrielzin@exampl0.com',
  phone: '912345678',
  profilePictureUrl: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=MS', 
};

const mockInterestedProperties = [
  {
    id: 'casa1',
    title: 'Apartamento T3 Moderno',
    location: 'Lisboa, Portugal',
    price: '€350.000',
    imageUrl: 'https://via.placeholder.com/300x200?text=Apartamento+T3',
  },
  {
    id: 'casa2',
    title: 'Moradia V4 com Jardim',
    location: 'Cascais, Portugal',
    price: '€600.000',
    imageUrl: 'https://via.placeholder.com/300x200?text=Moradia+V4',
  },
  {
    id: 'casa3',
    title: 'Estúdio no Centro',
    location: 'Porto, Portugal',
    price: '€180.000',
    imageUrl: 'https://via.placeholder.com/300x200?text=Estudio',
  },
];

// --- Componente Principal da Página de Perfil ---
function UserProfilePage() {
  const [userProfile, setUserProfile] = useState(mockUserProfile);
  const [interestedProperties, setInterestedProperties] = useState(mockInterestedProperties);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // Função para lidar com o upload da foto
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfile({ ...userProfile, profilePictureUrl: reader.result });
        showSnackbar('Foto de perfil atualizada com sucesso!', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  // Função para salvar as informações pessoais
  const handleSavePersonalInfo = (updatedInfo) => {
    setUserProfile({ ...userProfile, ...updatedInfo });
    showSnackbar('Informações pessoais salvas com sucesso!', 'success');
    // Em uma aplicação real, aqui você faria uma chamada à API para salvar os dados
  };

  // Função para remover uma propriedade de interesse
  const handleRemoveProperty = (propertyId) => {
    setInterestedProperties(
      interestedProperties.filter((prop) => prop.id !== propertyId)
    );
    showSnackbar('Casa removida das suas casas de interesse.', 'info');
    // Em uma aplicação real, aqui você faria uma chamada à API para remover a propriedade
  };

  // Função para visualizar detalhes da propriedade (simulado)
  const handleViewPropertyDetails = (propertyId) => {
    showSnackbar(`Redirecionando para os detalhes da propriedade: ${propertyId}`, 'info');
    // Em uma aplicação real, você usaria o React Router para navegar para a página de detalhes
    // Exemplo: navigate(`/property/${propertyId}`);
  };

  // Função para exibir o Snackbar
  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Meu Perfil de Utilizador
      </Typography>
      <Grid container spacing={4}>
        {/* Seção de Perfil (Informações Pessoais, Foto, Contatos) */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Informações do Perfil
            </Typography>

            {/* Foto de Perfil */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              <Avatar
                alt={userProfile.name || 'Usuário'}
                src={userProfile.profilePictureUrl}
                sx={{ width: 120, height: 120, mb: 2, border: '2px solid', borderColor: 'primary.main' }}
              />
              <Button
                variant="outlined"
                component="label"
                startIcon={<PhotoCameraIcon />}
                sx={{ textTransform: 'none' }}
              >
                Alterar Foto
                <input type="file" hidden accept="image/*" onChange={handlePhotoUpload} />
              </Button>
            </Box>

            {/* Informações Pessoais e Contatos */}
            <PersonalInfoSection userProfile={userProfile} onSave={handleSavePersonalInfo} />
          </Paper>
        </Grid>

        {/* Seção de Casas de Interesse */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Casas de Interesse
            </Typography>
            <InterestedPropertiesSection
              properties={interestedProperties}
              onRemoveProperty={handleRemoveProperty}
              onViewPropertyDetails={handleViewPropertyDetails}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Snackbar para notificações */}
      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

// --- Componente: Informações Pessoais ---
function PersonalInfoSection({ userProfile, onSave }) {
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [phone, setPhone] = useState(userProfile.phone);

  const handleSave = () => {
    onSave({ name, email, phone });
  };

  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      <TextField
        label="Nome Completo"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Telefone"
        variant="outlined"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleSave} sx={{ mt: 2, textTransform: 'none' }}>
        Salvar Alterações
      </Button>
    </Box>
  );
}

// --- Componente: Cartão de Propriedade ---
function PropertyCard({ property, onRemove, onViewDetails }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="180"
        image={property.imageUrl || 'https://via.placeholder.com/300x180?text=Imóvel'}
        alt={property.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.location}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          {property.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Button size="small" startIcon={<DeleteIcon />} onClick={() => onRemove(property.id)} color="error" sx={{ textTransform: 'none' }}>
          Remover
        </Button>
        <Button size="small" startIcon={<InfoIcon />} onClick={() => onViewDetails(property.id)} sx={{ textTransform: 'none' }}>
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}

// --- Componente: Seção de Casas de Interesse ---
function InterestedPropertiesSection({ properties, onRemoveProperty, onViewPropertyDetails }) {
  return (
    <Grid container spacing={3}>
      {properties.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="body1" sx={{ textAlign: 'center', mt: 3, color: 'text.secondary' }}>
            Você ainda não tem casas de interesse salvas. Comece a explorar e adicione suas favoritas!
          </Typography>
        </Grid>
      ) : (
        properties.map((property) => (
          <Grid item key={property.id} xs={12} sm={6} md={6} lg={4}> {/* Ajuste para 3 colunas em telas maiores */}
            <PropertyCard
              property={property}
              onRemove={onRemoveProperty}
              onViewDetails={onViewPropertyDetails}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default UserProfilePage;