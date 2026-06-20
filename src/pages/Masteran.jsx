import { Link } from "react-router-dom";

function Masteran() {
  const semesterList = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <h1>Masteran (UTS/UAS)</h1>

      <ul>
        {semesterList.map((nomor) => (
          <li key={nomor}>
            <Link to={`/masteran/${nomor}`}>Semester {nomor}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Masteran;