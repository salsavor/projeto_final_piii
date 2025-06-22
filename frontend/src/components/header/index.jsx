import { Link } from "react-router-dom";
import "../../App.css";

export default function Header() {
  return (
    <>
      <header
        style={{
          padding: "1rem",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Link to="/">
          <img
            src="/logo.webp"
            alt="Logo"
            style={{ width: "50px", height: "50px" }}
          /> 
        </Link>
        
        <Link
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            textDecoration: "none",
            color: "#333",
          }}
        >
          GB Real Estate
        </Link>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </nav>
      </header>
      <br />
      <br />
      <br />
    </>
  );
}
