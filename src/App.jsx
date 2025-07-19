import Navbar from "./components/Navbar";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <div className="relative bg-zinc-950 text-white min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
