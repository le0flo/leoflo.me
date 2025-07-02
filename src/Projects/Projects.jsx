import './Projects.css'

export function Projects() {
  return (
    <div id="projects" className="paragraph">
      <h1>Pubblicazioni</h1>
      <ul>
        <li>
          <p>
            <a href="https://github.com/le0flo/simpleaccounts">Simple accounts</a>
            <b> [WIP]</b>
            : Un server di autorizzazione configurabile ed integrabile con qualsiasi app.
            Dispone di: un sistema antispam che utilizza la tecnologia Proof-of-Work hashcash,
            authentication flow compatibile con la specifica OAuth 2.0,
            Autenticazione a due o più fattori (il TOTP è l'unico attualmente implementato) ed un sistema di ruoli e gestione dei permessi.
          </p>
        </li>

        <li>
          <p>
            <a href="https://github.com/le0flo/fastorders">Fast orders</a>
            <b> [WIP]</b>
            : Un sistema mirato alle grandi cucine, per gestire le ordinazioni dai propri menù.
            È stato pensato per integrarsi con Simple accounts perciò il progetto è molto immaturo al momento.
          </p>
        </li>

        <li>
          <p>
            <a href="https://appunti.leoflo.me">Appunti</a>
            : Una collezione di appunti presi durante i corsi.
            Permette a me di lavorare su di essi senza mai preoccuparmi di perdere tutto il lavoro e di averlo sempre disponibile.
            Inoltre permette agli altri di leggerli, darmi consigli e (anche se lo sconsiglio) direttamente studiare da essi.
            Utilizzo HUGO per generare il sito statico e prendo tutti gli appunti usando Obsidian,
            permettendomi di salvare direttamente il contenuto usando il formato Markdown (insieme a qualche piccola parte in Latex).
          </p>
        </li>
      </ul>
    </div>
  );
}
