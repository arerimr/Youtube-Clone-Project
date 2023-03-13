import Search from "./Search";
import VideoIndex from "./VideoIndex";


export default function Home({searchInput, handleTextChange, handleSubmit}){
    return(
        <div className="home">
            <Search searchInput={searchInput} handleTextChange={handleTextChange} handleSubmit={handleSubmit}/>
            <VideoIndex searchInput={searchInput}/>
        </div>
    )
}