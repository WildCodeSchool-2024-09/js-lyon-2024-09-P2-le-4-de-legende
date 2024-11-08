import logonav from "../../public/logo-violet-2.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <img id="logonav" src={logonav} alt="logo nav" />
        <ul>
          <li>Accueil</li>
          <li>Match</li>
          <li>Classement</li>
        </ul>
      </nav>
    </div>
  );
}
