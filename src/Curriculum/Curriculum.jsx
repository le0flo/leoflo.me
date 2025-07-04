import "./Curriculum.css"
import { English } from "./English";
import { Italiano } from "./Italiano";

export function Curriculum() {
  return (
    <div id="curriculum">
      <h1>Curriculum</h1>

      <div className="curriculum-list">
        <Italiano></Italiano>
        <English></English>
      </div>
    </div>
  );
}
