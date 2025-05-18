import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header" data-header>
      <div className="header-bottom">
        <div className="container">
          <Link to="http://localhost:5000" className="logo">
            <img src="/images/logo.png" alt="Homeverse logo" />
          </Link>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <Link to="#" className="logo">
                <Link to="/views/pages/index.jsx">
                  <img src="./assets/images/logo.png" alt="Homeverse logo" />
                </Link>
              </Link>

              <button
                className="nav-close-btn"
                data-nav-close-btn
                aria-label="Close Menu"
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <Link
                    to="/views/pages/index.jsx"
                    className="navbar-link"
                    data-nav-link
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="#about" className="navbar-link" data-nav-link>
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/imoveis/create" className="navbar-link" data-nav-link>
                    Adicionar Imóveis
                  </Link>
                </li>

                <li>
                  <Link
                    to="http://localhost:5000/utilizadores/create"
                    className="navbar-link"
                    data-nav-link
                  >
                    Criar Utilizadores
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header-bottom-actions">
            <button className="header-bottom-actions-btn" aria-label="Profile">
              <Link to="/utilizadores">
                <ion-icon name="person-outline"></ion-icon>
              </Link>

              <span>Profile</span>
            </button>

            <button className="header-bottom-actions-btn" aria-label="Cart">
              <Link to="/imoveis">
                <ion-icon name="cart-outline"></ion-icon>
              </Link>

              <span>Carrinho</span>
            </button>

            <button
              className="header-bottom-actions-btn"
              data-nav-open-btn
              aria-label="Open Menu"
            >
              <ion-icon name="menu-outline"></ion-icon>

              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
