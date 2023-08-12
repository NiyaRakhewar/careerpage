import "./App.css";
import { CareerPage } from "./components/CareerPage/CareerPage";
import { Footer } from "./components/Footer/Footer";
// import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div
        className="career-page-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <CareerPage />
        <Footer />
      </div>
      {/* <Routes>
    <Route path="/" element={} />
    </Routes> */}
    </div>
  );
}

export default App;
