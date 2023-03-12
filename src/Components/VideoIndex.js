import { getVideos } from "../Api/fetch";
import { useEffect, useState } from "react";
import VideoShowPage from "./VideoShowPage";
import ErrorMessage from "../Components/errors/ErrorMessage";

function VideoIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos()
      .then((videos) => {
        setVideos(videos);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, []);

  return (
    <div className="video-index">
      <p>display videos</p>
      <div>
        {loadingError ? (
          <ErrorMessage />
        ) : (
          videos.map((video) => {
            return <VideoShowPage key={video.id} video={video} />;
          })
        )}
      </div>
      <VideoShowPage />
    </div>
  );
}

export default VideoIndex;
