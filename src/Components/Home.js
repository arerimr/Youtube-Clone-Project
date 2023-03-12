import Search from "./Search";
import VideoIndex from "./VideoIndex";


export default function Home(){
    return(
        <div className="home">
            <Search />
            <VideoIndex />
        </div>
    )
}