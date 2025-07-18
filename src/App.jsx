import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="relative bg-zinc-950 text-white min-h-screen overflow-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
