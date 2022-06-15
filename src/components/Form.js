import classes from "../styles/from.module.css";
export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classes.from}`} action="#" {...rest}>
      {children}
    </form>
  );
}
