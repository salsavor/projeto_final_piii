import { createContext, useContext, useState } from "react";
import AuthService from "../services/auth.service";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Provider do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const login = async (email, password) => {
    try {
      const data = await AuthService.login(email, password);
      setToken(data.AccessToken);
      localStorage.setItem("token", data.AccessToken);
      setUser(data.user); // se o backend devolver info do user
    } catch (error) {
      throw error;
    }
  };

  const register = async (nome, email, nif, ocupacao, password) => {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, nif, ocupacao, password }),
    });
    if (!response.ok) throw new Error("Erro ao registar");
    return await response.json();
  };

  const logout = async () => {
    try {
      await AuthService.logout(token);
    } catch (error) {
      // Podes ignorar ou mostrar erro
    }
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};