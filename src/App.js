import Homepage from "./Pages/Homepage";
import About from "./Pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
