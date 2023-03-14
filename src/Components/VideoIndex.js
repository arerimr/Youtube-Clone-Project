import { getVideos } from "../Api/fetch";
import { useEffect, useState, } from "react";
// import { useParams } from "react-router-dom";
// import VideoShowPage from "./VideoShowPage";
import ErrorMessage from "../Components/errors/ErrorMessage";
import { Link } from "react-router-dom";

// const { id } = useParams();

function VideoIndex({searchInput}) {

  const [loadingError, setLoadingError] = useState(false);
  const [search, setSearch] = useState(""); 
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos(searchInput)
      .then((video) => {
        console.log(video.items)
        setSearch(searchInput);
        setVideos(video.items);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, [searchInput]);

  // if (searchInput === undefined) {
  //   // searchInput = "surfing"
  // }

  function filterVideo(searchInput, videos) {
    return videos.filter((video) => {
      return video.title.toLowerCase().match(searchInput.toLowerCase());
    });
  }

  return (
    <div className="video-index">
      <p>display videos</p>
      <div>
        {loadingError ? (
          <ErrorMessage />
        ) : (
          videos.map((video) => {
            return (
              <div key={video.id}>
                <Link to={`/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <p>{video.snippet.title}</p>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default VideoIndex;
