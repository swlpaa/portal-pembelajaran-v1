import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Materi from "./pages/Materi";
import Masteran from "./pages/Masteran";
import LatihanSoal from "./pages/LatihanSoal";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/masteran" element={<Masteran />} />
        <Route path="/latihan-soal" element={<LatihanSoal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;