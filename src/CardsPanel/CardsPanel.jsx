import './CardsPanel.css'
import { Curriculum } from './Curriculum/Curriculum';
import { Notes } from './Notes/Notes';
import { ShareMe } from './ShareMe/ShareMe';
import { Vikunja } from './Vikunja/Vikunja';

export function CardsPanel() {
  return (
    <div className='cards-panel'>
      <Curriculum></Curriculum>
      <Notes></Notes>
      <ShareMe></ShareMe>
      <Vikunja></Vikunja>
    </div>
  );
}
