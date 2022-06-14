import classes from "../styles/layout.module.css";
import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className="container">{children}</div>
      </main>
    </>
  );
}
