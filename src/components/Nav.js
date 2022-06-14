import logo from "../assets/images/logo-bg.png";
import classes from "../styles/nav.module.css";
import Account from "./Account";
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Halka React Logo" />
            <h3>Halka React</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
