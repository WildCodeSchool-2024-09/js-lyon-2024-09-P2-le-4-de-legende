import "./App.css";
import NavBar from "./components/NavBar";
import TopScorer from "./components/TopScorer";
import Video from "./components/Video";
import Footer from "./components/Footer";
import TeamStats from "./components/TeamStats";

export default function App() {
  return (
    <div className="document">
      <NavBar />
      <TopScorer />
      <TeamStats/>
      <Video />
      <Footer />
    </div>
  );
}
