import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./VideoIndex.css"

import ErrorMessage from "../Components/errors/ErrorMessage";



function VideoIndex() {

  // const uniqueID = uuidv4();

  const [loadingError, setLoadingError] = useState(false);

  const location = useLocation();
  const videoList = location.state.res;
  // console.log(videoList)



  return (
    <div className="video-index">
      <div>
        {loadingError ? (
          <ErrorMessage />
        ) : (
          videoList.items.map((video) => {
            return (
              <ul key={video.id.videoId}>
                <div className="indexDiv">
                  <li key={video.id.videoId}>
                    <Link to={`/videos/${video.id.videoId}`}>
                      <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                      />
                      <h3>{video.snippet.title}</h3>
                    </Link>
                  </li>
                </div>
              </ul>
            );
          })
        )}
      </div>
    </div>
  );
}

export default VideoIndex;
