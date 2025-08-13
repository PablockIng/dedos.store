import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Listen from "./pages/Listen";
import Download from "./pages/Download";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navbar en todas las páginas */}
        <Navbar />

        {/* Contenido de las páginas */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
