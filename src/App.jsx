import userLogo from '/user.jpg'
import './App.css'
import { LinksPanel } from './LinksPanel/LinksPanel'
import { CardsPanel } from './CardsPanel/CardsPanel'
import { QrCodeOverlay } from './QrCodeOverlay/QrCodeOverlay'

export function App() {
  return (
    <>
      <img id='user-photo' src={userLogo} />
      <h1 id='user-name'>Leonardo</h1>

      <LinksPanel></LinksPanel>
      <CardsPanel></CardsPanel>
      <QrCodeOverlay></QrCodeOverlay>
    </>
  )
};
