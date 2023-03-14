import { getVideos } from "../Api/fetch";
import { useEffect, useState } from "react";

// import VideoShowPage from "./VideoShowPage";
import ErrorMessage from "../Components/errors/ErrorMessage";

function VideoIndex({ videos }) {

  const [loadingError, setLoadingError] = useState(false);


  // console.log(videos);



  
  return (
    <div className="video-index">
      <p>display videos</p>
      <div>
        {/* {loadingError ? (
          <ErrorMessage />
        ) : (
          videos.map((video) => {
            return (
              <div key={video.id}>
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <p>{video.snippet.title}</p>
              </div>
            );
          })
        )} */}
      </div>
    </div>
  );
}

export default VideoIndex;
