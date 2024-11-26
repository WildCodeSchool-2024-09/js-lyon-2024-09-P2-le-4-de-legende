import logonav from "../../../public/LigaLogo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="WrappLogoTitle">
          <img id="logonav" src={logonav} alt="logo nav" />
          <p className="AppName">Foot4Legend</p>
        </div>
      </nav>
    </div>
  );
}
