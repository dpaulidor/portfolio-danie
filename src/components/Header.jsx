// src/components/Header.js
import { Link } from "react-router-dom";
import './Header.css';
function Header() {
  return (
    <header className="site-header">
     
 <Link to="/">
  <img src="/logo.png" alt="Logo" className="header-logo" style={{ height: "50px" }} />
</Link>
    </header>
   
  );
}

export default Header;
