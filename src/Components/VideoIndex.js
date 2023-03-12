import { getVideos } from "../Api/fetch";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import VideoShowPage from "./VideoShowPage";
import ErrorMessage from "../Components/errors/ErrorMessage";

const { search } = useParams();

function VideoIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos()
      .then((video) => {
        setVideos(video.items);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, []);

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
          videos.map((video) => {
            return <VideoShowPage key={video.id} video={video} />;
          })
        )}
      </div>
    </div>
  );
}

export default VideoIndex;
