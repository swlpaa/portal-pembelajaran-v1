import { useParams } from "react-router-dom";
import { masteran } from "../data/masteran";

function SemesterMasteran() {
  const { semesterId } = useParams();

  const masteranSemesterIni = masteran.filter(
    (item) => item.semester === Number(semesterId)
  );

  return (
    <div>
      <h1>Masteran Semester {semesterId}</h1>

      {masteranSemesterIni.length === 0 ? (
        <p>Belum ada masteran untuk semester ini.</p>
      ) : (
        <ul>
          {masteranSemesterIni.map((item) => (
            <li key={item.id}>
              <strong>{item.matkul}</strong> — {item.kategori}{" "}
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

export default SemesterMasteran;