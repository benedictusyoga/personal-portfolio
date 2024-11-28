import "./App.css";
import NavBar from "./components/NavBar";
import NotFound from "./pages/errorPage/NotFound";
import Home from "./pages/home/Home";
import ProjectDetail from "./pages/projects/ProjectDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
