
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import "./VideoShowPage.css"


function VideoShowPage() {


  function onReady(e) {
    e.target.playVideo()
  }

  return (
    <div className="video-show">

      <YouTube videoId={id} onReady={onReady} />

    </div>
  )
}

export default VideoShowPage
