import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TopScorer from "./components/TopScorer";

export default function App() {
  return (
    <div className="document">
      <NavBar />
      <TopScorer />
      <Footer />
    </div>
  );
}
