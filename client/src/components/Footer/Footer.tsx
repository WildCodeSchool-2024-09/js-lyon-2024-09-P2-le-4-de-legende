import "./Footer.css";
import logofooter from "../../../public/Logo-Footer.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <img id="logofooter" src={logofooter} alt="logo du footer" />
      </div>

      <div>
        <p className="footerDescription">Rejoignez-nous sur Instagram et suivez toute notre actualité</p>
      </div>
      <div>
        <img id="logofooter" src={logofooter} alt="logo du footer" />
      </div>
    </footer>
  );
}
