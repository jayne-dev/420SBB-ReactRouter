import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from'react-router-dom'
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
      <nav>
        <NavLink 
        to="/"
        style={({ isActive }) => ({
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '#f0f0f0',
        })}
        >
        Home 

          <NavLink 
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
          > About
          </NavLink>

          <NavLink 
          to="/projects"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
          >
          Projects
          </NavLink>

          <NavLink 
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
          >
          Contact
          </NavLink>

        </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About />} />
        <Route path='/projects' element={ <Projects />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
