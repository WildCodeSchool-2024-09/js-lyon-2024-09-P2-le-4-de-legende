import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopScorer from "./components/TopScorers/TopScorer";
import Video from "./components/Video/Video";
import League from "./components/League/League";
import Footer from "./components/Footer/Footer";
import TeamStats from "./components/TeamStats/TeamStats";
import SeasonTab from "./components/SeasonTab";
import YouTube from "./components/YouTube/YouTube";
import LigaTV from "./components/LigaTV/LigaTV";

export default function App() {
  return (
    <>
      <LigaTV />

      {/*
      <NavBar />
      <League />

      <div className="document">
        <div className="MainWrapper">
          <TopScorer />
          <TeamStats />
          <SeasonTab />
        </div>

        <div className="videoWrapper">
          <Video />
        </div>

        <div>
          <YouTube />
        </div>
      </div>
      <Footer />
    */}
    </>
  );
}
