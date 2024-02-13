import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Link from './components/Link';
import About from './components/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">Anime Navigation</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/home" className="nav-link">Home</NavLink>
              <NavLink to="/link" className="nav-link">Link</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/link' element={<Link />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
