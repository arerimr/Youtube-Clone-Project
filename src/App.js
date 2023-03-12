import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import VideoIndex from './Components/VideoIndex';
import { getVideos } from './Api/fetch';

function App() {
  return (
    <div className="App">
        <NavBar />
        <br />
        <br />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/videos' element={<VideoIndex/>}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
