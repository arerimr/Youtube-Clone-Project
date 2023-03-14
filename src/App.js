import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import { Routes, Route } from "react-router-dom";
import VideoIndex from './Components/VideoIndex';
import { getVideos } from './Api/fetch';
import { useState } from 'react';
import VideoShowPage from './Components/VideoShowPage';

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [videos, setVideos] = useState([])

  function handleTextChange(e){
    let val = e.target.value
    setSearchInput(val)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(searchInput)
    getVideos(searchInput.toLocaleLowerCase()).then((video)=>{
      setVideos(video.items)
      console.log(videos)
    })
    setSearchInput("")
    //to be updated
  }

  return (
    <div className="App">
        <NavBar />
        <br />
        <br />
        <Routes>
          <Route path='/' element={<Home searchInput={searchInput} handleTextChange={handleTextChange} handleSubmit={handleSubmit}/>}/>
          {/* <Route path='/videos' element={<VideoIndex/>}/> */}
          <Route path='/about' element={<About />}/>
          <Route path='/:id' element={<VideoShowPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
