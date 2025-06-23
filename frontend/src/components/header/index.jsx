import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../../App.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          padding: "1rem",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          position: "relative",
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
            marginRight: "auto",
          }}
        >
          GS Real Estate
        </Link>

        {/* Hamburger icon for mobile */}
        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
          style={{ display: "none", cursor: "pointer" }}
        >
          {open ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </div>

        <nav
          className={`main-nav${open ? " open" : ""}`}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>
        </nav>
      </header>
      <style>
        {`
          @media (max-width: 600px) {
            .hamburger {
              display: block !important;
              position: absolute;
              right: 1rem;
              top: 1.2rem;
              z-index: 20;
            }
            .main-nav {
              display: none !important;
              flex-direction: column !important;
              width: 100%;
              background: #f5f5f5;
              position: absolute;
              left: 0;
              top: 60px;
              gap: 0.5rem !important;
              border-top: 1px solid #ddd;
              padding: 1rem 0;
              z-index: 10;
            }
            .main-nav.open {
              display: flex !important;
            }
            .nav-link {
              width: 100%;
              padding: 0.5rem 1rem;
            }
          }
        `}
      </style>
    </>
  );
}
