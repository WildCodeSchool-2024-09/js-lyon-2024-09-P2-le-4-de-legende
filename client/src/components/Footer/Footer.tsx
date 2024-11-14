import "./Footer.css";
import logofooter from "../../public/logo-footer.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <img id="logofooter" src={logofooter} alt="logo du footer" />
      </div>

      <div>
        <p>Retrouvez-nous sur Instagram et tout le bordel</p>
      </div>
      <div>
        <img id="logofooter" src={logofooter} alt="logo du footer" />
      </div>
    </footer>
  );
}
