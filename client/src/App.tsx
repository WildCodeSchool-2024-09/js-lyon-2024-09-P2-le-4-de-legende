import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopScorer from "./components/TeamScorers/TopScorer";
//import Video from "./components/Video/Video";
import League from "./components/League/League";
import Footer from "./components/Footer/Footer";
//import TeamStats from "./components/TeamStats/TeamStats";
import SeasonTab from "./components/SeasonTab";

export default function App() {
  return (
    <>
      <NavBar />
      <League />

      <div className="document">
          <div className="lateralNavbar" >
            <p className="lateralNavbaTitle">NAVIGATION</p>
            <button className="lateralNavbaButton">Top Scorer</button>
            <button className="lateralNavbaButton">Team Statistics</button>
            <button className="lateralNavbaButton">Team Statistics</button>
          </div>

          
            <div className="MainWrapper">
              <TopScorer />
              
            </div >
          
          
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