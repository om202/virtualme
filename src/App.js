import Messaging from "./pages/Messaging";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewCharacter from "./pages/NewCharacter";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/new" element={<NewCharacter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
