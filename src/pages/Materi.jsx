import { Link } from "react-router-dom";

function Materi() {
  const semesterList = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <h1>Daftar Semester</h1>

      <ul>
        {semesterList.map((nomor) => (
          <li key={nomor}>
            <Link to={`/materi/${nomor}`}>Semester {nomor}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Materi;