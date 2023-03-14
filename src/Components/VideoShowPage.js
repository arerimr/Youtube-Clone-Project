import YouTube from "react-youtube";
import { useParams } from "react-router-dom";


function VideoShowPage({ video}) {

  const {id} = useParams();

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
