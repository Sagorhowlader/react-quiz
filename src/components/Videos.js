import { Link } from "react-router-dom";
import Video from "../components/Video";
import classes from "../styles/videos.module.css";
export default function Videos() {
  return (
    <div class={classes.videos}>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
}
