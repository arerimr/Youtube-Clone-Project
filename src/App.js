import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <br />
        <br />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='' element={<About />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
