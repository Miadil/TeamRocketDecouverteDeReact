/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";

import "./Header.css";

function Header(props) {
  console.log("props :", props.age, props.name);
  return (
    <nav className="globalNav">
      <Link to="/">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </Link>
      <div className="info">firstname : {props.name}</div>
      <ul>
        <li>
          <Link to="/home"> Home</Link>
        </li>
        <li>
          <Link to="/characters"> Characters</Link>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
export default Header;
