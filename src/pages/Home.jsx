import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Selamat Belajar Teman-Temanku</h1>
      <h2>Portal Pembelajaran</h2>

      <p>
        Temukan materi perkuliahan, kumpulan UTS/UAS,
        dan latihan soal untuk setiap semester.
      </p>

      <br />

      <Link to="/materi">
        <button>📚 Materi</button>
      </Link>

      <br /><br />

      <Link to="/masteran">
        <button>📝 Masteran</button>
      </Link>

      <br /><br />

      <Link to="/latihan-soal">
        <button>🎯 Latihan Soal</button>
      </Link>
    </div>
  );
}

export default Home;