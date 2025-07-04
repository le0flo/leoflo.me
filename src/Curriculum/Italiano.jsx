import { dateOfLastUpdate } from "../Utilities";

export function Italiano() {
  let file = "curriculum_it";
  let lastUpdatedDate = dateOfLastUpdate(file);

  return (
    <div className="curriculum-tile">
      <h3>Italiano</h3>
      <p>Ultimo aggiornamento: <b>{lastUpdatedDate}</b></p>

      <a href={"https://files.leoflo.me/lavoro/" + file + ".pdf"}>
        <p>Leggi <i className="fa-solid fa-book"></i></p>
      </a>
    </div>
  );
}
