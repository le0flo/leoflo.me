import userLogo from '/user.jpg'
import './App.css'
import { LinksPanel } from './LinksPanel/LinksPanel'
import { QrCodeOverlay } from './QrCodeOverlay/QrCodeOverlay'
import { Introduction } from './Introduction/Introduction'
import { Projects } from './Projects/Projects'
import { Curriculum } from './Curriculum/Curriculum'

export function App() {
  return (
    <>
      <img id='user-photo' src={userLogo} />
      <h1 id='user-name'>Leonardo</h1>

      <LinksPanel></LinksPanel>
      <Introduction></Introduction>
      <Projects></Projects>
      <Curriculum></Curriculum>
      <QrCodeOverlay></QrCodeOverlay>
    </>
  )
};
