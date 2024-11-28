import LogoNav from "../../../public/LigaLogo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="WrappLogoTitle">
          <img id="logonav" src={LogoNav} alt="logo nav" />
          <p className="AppName">Foot4Legend</p>
        </div>
      </nav>
    </div>
  );
}
