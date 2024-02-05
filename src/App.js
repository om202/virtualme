import Messaging from "./pages/Messaging";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messaging" element={<Messaging />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
