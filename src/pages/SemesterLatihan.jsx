import { useParams } from "react-router-dom";
import { latihan } from "../data/latihan";

function SemesterLatihan() {
  const { semesterId } = useParams();

  const latihanSemesterIni = latihan.filter(
    (item) => item.semester === Number(semesterId)
  );

  return (
    <div>
      <h1>Latihan Soal Semester {semesterId}</h1>

      {latihanSemesterIni.length === 0 ? (
        <p>Belum ada latihan soal untuk semester ini.</p>
      ) : (
        <ul>
          {latihanSemesterIni.map((item) => (
            <li key={item.id}>
              <strong>{item.matkul}</strong>{" "}
              <a href={item.pdf} target="_blank" rel="noreferrer">
                (Lihat PDF)
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SemesterLatihan;