import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Materi from "./pages/Materi";
import Masteran from "./pages/Masteran";
import LatihanSoal from "./pages/LatihanSoal";
import SemesterMateri from "./pages/SemesterMateri";
import SemesterMasteran from "./pages/SemesterMasteran";
import SemesterLatihan from "./pages/SemesterLatihan";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/materi/:semesterId" element={<SemesterMateri />} />
        <Route path="/masteran" element={<Masteran />} />
        <Route path="/masteran/:semesterId" element={<SemesterMasteran />} />
        <Route path="/latihan-soal" element={<LatihanSoal />} />
        <Route path="/latihan-soal/:semesterId" element={<SemesterLatihan />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;