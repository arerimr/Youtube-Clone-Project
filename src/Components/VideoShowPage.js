
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

function VideoShowPage() {
  const [video, setVideo] = useState({})
  const [error, setError] = useState(false)

  const { id } = useParams()

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
