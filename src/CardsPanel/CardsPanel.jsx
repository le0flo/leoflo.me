import './CardsPanel.css'
import { ContactMe } from './ContactMe/ContactMe';
import { Curriculum } from './Curriculum/Curriculum';
import { Notes } from './Notes/Notes';
import { ShareMe } from './ShareMe/ShareMe';

export function CardsPanel() {
  return (
    <div className='cards-panel'>
      <Curriculum></Curriculum>
      <Notes></Notes>
      <ContactMe></ContactMe>
      <ShareMe></ShareMe>
    </div>
  );
}
