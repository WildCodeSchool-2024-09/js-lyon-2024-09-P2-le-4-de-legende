import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopScorer from "./components/TeamScorers/TopScorer";
import Video from "./components/Video/Video";
import League from "./components/League/League";
import Footer from "./components/Footer/Footer";
import TeamStats from "./components/TeamStats/TeamStats";

export default function App() {
  return (
    <div className="document">
      <NavBar />
      <League />
      <TopScorer />
      <TeamStats/>
      <Video />
      <Footer />
      
    </div>
  );
}
