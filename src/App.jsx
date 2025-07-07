// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Competences from './pages/Competences'; // en haut




function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/competences" element={<Competences />} />
        </Routes>
      </main>

      {/* ✅ Footer utilisé ici */}
      <Footer />
    </Router>
  );
}

export default App;
