import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import League from "./components/League/League";
import Footer from "./components/Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import LigaTV from "./components/LigaTV/LigaTV";

export default function App() {
  return (
    <>
      <NavBar />
      <League />

      <div className="document">
        <div className="lateralNavbar">
          <p className="lateralNavbaTitle">NAVIGATION</p>

          <Link to="/">
            <button className="lateralNavbaButton" type="button">
              <img className="imgNavbar" src="/world-cup.png" />
              <p className="textNavbar">Top Scorer</p>
            </button>
          </Link>

          <Link to="/SeasonTab">
            <button className="lateralNavbaButton" type="button">
              <img className="imgNavbar" src="/rankingICON.png" />
              <p className="textNavbar">Classement</p>
            </button>
          </Link>

          <Link to="/TeamStats">
            <button className="lateralNavbaButton" type="button">
              <img className="imgNavbar" src="/top-scorer.png" />
              <p className="textNavbar">Team Stat</p>
            </button>
          </Link>
        </div>

        <main className="MainWrapper">
          <Outlet />
        </main>
      </div>
      <LigaTV />
      <Footer />
    </>
  );
}
