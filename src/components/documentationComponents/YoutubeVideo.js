const YoutubeVideo = ({src}) => {
  return (
    <div className="video-container">
      <iframe className="video-element" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen src={src}>
      </iframe>
    </div>
  )
}

YoutubeVideo.defaultProps = {
    src: ""
}

export default YoutubeVideo;
