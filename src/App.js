// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Hotels from "./pages/Hotel/Hotel";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/hotels" element={<Hotels />} />
        <Route exact path="/hotels/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
