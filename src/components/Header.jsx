/* eslint-disable react/prop-types */
import viteLogo from "/vite.svg";

import "./Header.css";

function Header(props) {
  console.log("props :", props.age, props.name);
  return (
    <nav className="globalNav">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <div className="info">firstname : {props.name}</div>
      <ul>
        <li>Home</li>
        <li>Characters</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
export default Header;
