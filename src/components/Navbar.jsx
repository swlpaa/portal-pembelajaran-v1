import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/materi">Materi</Link>
      {' | '}
      <Link to="/masteran">Masteran</Link>
      {' | '}
      <Link to="/latihan-soal">Latihan Soal</Link>
    </nav>
  )
}

export default Navbar