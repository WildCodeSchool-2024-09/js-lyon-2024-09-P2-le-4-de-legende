import logonav from "../../../public/LiguaLogo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="WrappLogoTitle">
          <img id="logonav" src={logonav} alt="logo nav" />
          <p className="AppName">Foot4Legend</p>
        </div>
        <ul className="MenuList">
          <li>Accueil</li>
          <li>Match</li>
          <li>Classement</li>
        </ul>
      </nav>
    </div>
  );
}
