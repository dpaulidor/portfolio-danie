

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';  // <-- Import ajouté

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />  {/* Nouvelle route */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
