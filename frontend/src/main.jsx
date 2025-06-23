import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/header/index.jsx";
import Footer from "./components/footer/index.jsx";
import { AuthProvider } from "./contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <Header />
        <App />
        <Footer />
      </AuthProvider>
    </Router>
  </StrictMode>
);
