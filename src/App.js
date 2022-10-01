import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import Navbar from './components/navbar.js'
import {BrowserRouter as Router, Switch ,Route, Routes} from 'react-router-dom'
import {NavLink as Link} from "react-router-dom"
import Home from './components/index.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'
import Footer from './components/footer.js'

function App() {
  return (
    <>
      <Header />
      <Router>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
