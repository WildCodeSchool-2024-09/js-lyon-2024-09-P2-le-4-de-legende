import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopScorer from "./components/TeamScorers/TopScorer";
//import Video from "./components/Video/Video";
import League from "./components/League/League";
import Footer from "./components/Footer/Footer";
import { Link, Outlet } from "react-router-dom";
//import TeamStats from "./components/TeamStats/TeamStats";
//import SeasonTab from "./components/SeasonTab";

export default function App() {
  return (
    <>
      <NavBar />
      <League />

      <div className="document">
          <div className="lateralNavbar">
            <p className="lateralNavbaTitle">NAVIGATION</p>

            <Link to="/"><button className="lateralNavbaButton" type="button"> 
               <img className="imgNavbar" src="/world-cup.png"/>
               <p className="textNavbar">Top Scorer</p>
            </button></Link>

            <Link to="/SeasonTab"><button className="lateralNavbaButton" type="button">
              <img className="imgNavbar" src="/rankingICON.png"/>
              <p className="textNavbar">Classement</p>
            </button></Link>

            <Link to="/TeamStats"><button className="lateralNavbaButton" type="button">
              <img className="imgNavbar" src="/top-scorer.png"/>
              <p className="textNavbar">Team Stat</p>
            </button></Link>

          </div>
          
            <main className="MainWrapper">
              <Outlet/>
            </main >
          
          
      </div>

      <Footer />
      
    </>
  );
}

/*

export default function App() {
  return (
    <>
      <NavBar />
      <League />

      <div className="document">

          <div className="MainWrapper">
            <TopScorer />
            <TeamStats/>
            <SeasonTab />
          </div >

          <div className="videoWrapper">
            <Video />
          </div>
      </div>

      <Footer />
      
    </>
  );
}

*/