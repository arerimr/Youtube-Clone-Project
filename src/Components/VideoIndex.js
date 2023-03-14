

import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./VideoIndex.css"

// import VideoShowPage from "./VideoShowPage";
import ErrorMessage from "../Components/errors/ErrorMessage";
// import { Link } from "react-router-dom";

// const { id } = useParams();


function VideoIndex() {

  const [loadingError, setLoadingError] = useState(false);

  const location = useLocation();
  const videoList = location.state.res;

  console.log(videoList);

  function filterVideo(search, videos) {
    return videos.filter((video) => {
      return video.title.toLowerCase().match(search.toLowerCase());
    });
  }

  return (
    <div className="video-index">
      <p>display videos</p>
      <div>
        {loadingError ? (
          <ErrorMessage />
        ) : (
          videoList.items.map((video) => {
            return (
              <ul>
                <li key={video.id.videoId}>
                 <Link to={`/videos/${video.id.videoId}`}>
                 <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                  />
                  <h3>{video.snippet.title}</h3>
                 </Link> 
                </li>
              </ul>

            );
          })
        )}
      </div>
    </div>
  );
}

export default VideoIndex;
