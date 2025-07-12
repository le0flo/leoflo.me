import "./Projects.css"
import { SimpleAccounts } from "./SimpleAccounts";
import { Appunti } from "./Appunti";

export function Projects() {
  return (
    <div id="projects">
      <h1>Pubblicazioni</h1>

      <div className="projects-list">
        <SimpleAccounts></SimpleAccounts>
        <Appunti></Appunti>
      </div>
    </div>
  );
}
