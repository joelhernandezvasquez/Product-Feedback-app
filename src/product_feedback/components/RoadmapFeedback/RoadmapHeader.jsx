import {ReturnPreviousPage} from '../../components/ReturnPreviousPage/ReturnPreviousPage';
import { Link } from 'react-router-dom';

export const RoadmapHeader = () => {
  return (
    <header className='roadmap-header'>
    <div>
    <ReturnPreviousPage arrowColor='#fff'/>
    <h1>Roadmap</h1>
    </div>

    <Link className="capitalize btn-add-feedback" to="/feedback"> + add feedback</Link>
   </header>
  )
}
