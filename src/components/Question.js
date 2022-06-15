import Answer from "../components/Answer";
import classes from "../styles/question.module.css";
export default function Question() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answer />
    </div>
  );
}
