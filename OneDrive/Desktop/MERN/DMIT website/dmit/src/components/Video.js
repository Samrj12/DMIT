import { DefaultPlayer} from "react-html5video";
import "../../node_modules/react-html5video/dist/styles.css";
import video from "../res/Outro.mp4";
function Video() {
  return (
    <>
    <div className="border-4  overflow-hidden rounded-2xl">
    <DefaultPlayer
        autoPlay
        poster="../res/thumb.jpg"
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
      >
        <source src={video} type="video/webm" />
      </DefaultPlayer>
    </div>
      
    </>
  );
}

export default Video;
