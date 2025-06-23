import axios from "axios";

class AuthService {
  async register(email, password) {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/register",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      return res.data;
    } catch (error) {
      console.error("Register failed", error);
      throw error;
    }
  }

  async login(email, password) {
    try {
      const res = await axios.post(
        "http://localhost:5173/api/v1/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  }

  async logout(token) {
    try {
      await axios.delete("http://localhost:5173/api/v1/logout", {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });
    } catch (error) {
      console.error("Logout failed", error);
      throw error;
    }
  }
}

export default new AuthService();
