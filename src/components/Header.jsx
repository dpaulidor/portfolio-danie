// src/components/Header.js
// import { Link } from "react-router-dom";
// import './Header.css';
// function Header() {
//   return (
//     <header className="site-header">
     
//  <Link to="/">
//   <img src="/logo.png" alt="Logo" className="header-logo" style={{ height: "50px" }} />
// </Link>
//     </header>
   
//   );
// }

// export default Header;
// src/components/Header.jsx
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import './Header.css';
import '../styles/Navbar.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo à gauche */}
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="header-logo"
          />
        </Link>

        {/* Navbar à droite */}
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
