import logo from "../assets/images/logo-bg.png";
import classes from "../styles/nav.module.css";
import Account from "./Account";

import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Halka React Logo" />
            <h3>Halka React</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
