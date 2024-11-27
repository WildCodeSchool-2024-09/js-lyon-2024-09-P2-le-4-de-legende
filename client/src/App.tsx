import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import League from "./components/League/League";
import Footer from "./components/Footer/Footer";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <League />

      <section>
        <div className="document">
          <div className="lateralNavbar">
            <p className="lateralNavbaTitle">NAVIGATION</p>

            <Link className="buttonresponsive" to="/">
              <button className="lateralNavbaButton" type="button">
                <img className="imgNavbar" src="/world-cup.png" />
                <p className="textNavbar">Top Scorer</p>
              </button>
            </Link>

            <Link className="buttonresponsive" to="/SeasonTab">
              <button className="lateralNavbaButton" type="button">
                <img className="imgNavbar" src="/rankingICON.png" />
                <p className="textNavbar">Classement</p>
              </button>
            </Link>

            <Link className="buttonresponsive" to="/TeamStats">
              <button className="lateralNavbaButton" type="button">
                <img className="imgNavbar" src="maillot-de-foot.png" />
                <p className="textNavbar">Team Stat</p>
              </button>
            </Link>

            <Link className="buttonresponsive" to="/LigaTV">
              <button className="lateralNavbaButton" type="button">
                <img className="imgNavbar" src="smart-tv.png" />
                <p className="textNavbar">Liga TV</p>
              </button>
            </Link>
          </div>
        
        <main className="MainWrapper">
          <Outlet />
        </main>
      </div>
      </section>
      <Footer />
    </>
  );
}
