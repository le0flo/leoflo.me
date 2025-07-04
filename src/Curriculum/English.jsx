import { dateOfLastUpdate } from "../Utilities";

export function English() {
  let file = "curriculum_en";
  let lastUpdatedDate = dateOfLastUpdate(file);

  return (
    <div className="curriculum-tile">
      <h3>English</h3>
      <p>Last update: <b>{lastUpdatedDate}</b></p>

      <a href={"https://files.leoflo.me/lavoro/" + file + ".pdf"}>
        <p>Read <i className="fa-solid fa-book"></i></p>
      </a>
    </div>
  );
}
