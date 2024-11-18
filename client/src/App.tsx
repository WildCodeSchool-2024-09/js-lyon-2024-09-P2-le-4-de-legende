import "./App.css";
import NavBar from "./components/NavBar";
import TopScorer from "./components/TopScorer";
import YouTube from "./components/YouTube/YouTube";
import Video from "./components/Video";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="document">
      <NavBar />
      <TopScorer />
      <YouTube />
      <Video />
      <Footer />
    </div>
  );
}
