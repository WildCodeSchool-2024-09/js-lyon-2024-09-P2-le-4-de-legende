import "./App.css";
import NavBar from "./components/NavBar";
import TopScorer from "./components/TopScorer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="document">
      <NavBar />
      <TopScorer />
      <Footer />
    </div>
  );
}
