import { getOneVideo } from "../Api/fetch"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import ErrorMessage from "./errors/ErrorMessage"


function VideoShowPage() {
  const [video, setVideo] = useState({})
  const [error, setError] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    getOneVideo(id).then((vid) => {
      let snip = vid.items[0].snippet
      setVideo(snip)
      Object.keys(snip).length === 0 ? setError(true) : setError(false)
      // console.log(snip)
    }).catch(() => setError(true))
  }, [id])

  //console.log(video)
  return (
    <div className="video-show">{
      error ? (<ErrorMessage />) : (
        <>
          <img src={video.thumbnails.medium.url} alt={video.title} />
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </>
      )
    }

    </div>
  )
}

export default VideoShowPage
