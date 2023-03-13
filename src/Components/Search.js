import "./search.css"



function Search({searchInput, handleTextChange, handleSubmit}) {

  return (
    <div>
      <form className="search-form" onSubmit={(e)=>handleSubmit(e)}>
        <input 
        type="text" 
        placeholder="Search..." 
        id="search"
        value={searchInput}
        onChange={(e)=>handleTextChange(e)}
        />
        <button className="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
