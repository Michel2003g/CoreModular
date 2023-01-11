const Video = ({src, controls}) => {
  return (
    <div className="video-container">
        <video className="video-element" src={src} controls={controls}>
    
        </video>
    </div>
  )
}

Video.defaultProps = {
    src: "",
    controls: true
}

export default Video;
