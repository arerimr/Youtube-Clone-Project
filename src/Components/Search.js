import "./search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVideos } from "../Api/fetch"


function Search() {

  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();
 

  function handleTextChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    getVideos(searchInput).then((res) => {
      navigate("/videos", { state :{res} })
    });

    setSearchInput("");
  }

  return (
    <div>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search..."
          id="search"
          value={searchInput}
          onChange={(e) => handleTextChange(e)}
        />
        <button className="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
