import "./App.css";
import { CareerPage } from "./components/CareerPage/CareerPage";
import { Footer } from "./components/Footer/Footer";
// import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="career-page-container">
        <Navbar />
        <CareerPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
