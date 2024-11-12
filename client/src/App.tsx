import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TeamStats from "./components/TeamStats";

export default function App() {
  return (
    <div className="document">
      <NavBar />
      <TeamStats/>
      <Footer />
    </div>
  );
}
