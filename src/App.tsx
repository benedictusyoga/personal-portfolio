import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
