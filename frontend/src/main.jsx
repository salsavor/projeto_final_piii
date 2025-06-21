import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <App />
      <Footer />
    </Router>
  </StrictMode>,
)
