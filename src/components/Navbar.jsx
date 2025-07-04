import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '10px 20px',
      // backgroundColor: '#e0e0e0',
      display: 'flex',
      flexDirection: 'row',
      gap: '80px',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: '',
      fontSize: '1.2rem',
      
      
    }}>
  
      <Link to="/">Accueil</Link>
      <Link to="/projects">Projets</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">À propos</Link>
      
    </nav>
  );
}

export default Navbar;
