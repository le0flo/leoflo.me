import userLogo from "/user.jpg"
import "./App.css"
import { Links } from "./Links/Links"
import { Introduction } from "./Introduction/Introduction"
import { Projects } from "./Projects/Projects"
import { Curriculum } from "./Curriculum/Curriculum"
import { QrCodeOverlay } from "./QrCodeOverlay/QrCodeOverlay"

export function App() {
  return (
    <>
      <img id="user-photo" src={userLogo} />
      <h1 id="user-name">Leonardo</h1>

      <Links></Links>
      <Introduction></Introduction>
      <Projects></Projects>
      <Curriculum></Curriculum>

      <QrCodeOverlay></QrCodeOverlay>
    </>
  )
};
