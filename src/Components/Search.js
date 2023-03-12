import { useState } from "react"
import { getVideos } from "../fetch"
import "./search.css"



function Search() {
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
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Search..." 
        id="search"
        value={searchInput}
        onChange={handleTextChange}
        />
        <button className="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
