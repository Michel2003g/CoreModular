const Video = ({src, controls}) => {
  return (
    <video className="video-element" src={src} controls={controls}>
        
    </video>
  )
}

Video.defaultProps = {
    src: "",
    controls: true
}

export default Video;
