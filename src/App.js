import "./App.css";
import { CareerPage } from "./components/CareerPage/CareerPage";
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
      </div>
      {/* <Routes>
    <Route path="/" element={} />
    </Routes> */}
    </div>
  );
}

export default App;
