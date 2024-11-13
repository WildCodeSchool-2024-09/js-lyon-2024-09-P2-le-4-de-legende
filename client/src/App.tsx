import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import League from "./components/League";

export default function App() {
  return (
    <div className="document">
      <NavBar />
      <League />
      <Footer />
    </div>
  );
}
