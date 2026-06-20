import { useParams } from "react-router-dom";
import { materi } from "../data/materi";

function SemesterMateri() {
  const { semesterId } = useParams();

  const materiSemesterIni = materi.filter(
    (item) => item.semester === Number(semesterId)
  );

  return (
    <div>
      <h1>Materi Semester {semesterId}</h1>

      {materiSemesterIni.length === 0 ? (
        <p>Belum ada materi untuk semester ini.</p>
      ) : (
        <ul>
          {materiSemesterIni.map((item) => (
            <li key={item.id}>
              <strong>{item.matkul}</strong> — {item.judul}{" "}
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

export default SemesterMateri;