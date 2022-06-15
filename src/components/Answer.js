import Checkbox from "../components/Checkbox";
import classes from "../styles/answer.module.css";
export default function Answer() {
  return (
    <div className={classes.answer}>
      <Checkbox className={classes.answer} text="Padma River" />
    </div>
  );
}
