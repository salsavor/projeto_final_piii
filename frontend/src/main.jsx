import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Header from './components/header/index.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <App />
    </Router>
  </StrictMode>,
)
