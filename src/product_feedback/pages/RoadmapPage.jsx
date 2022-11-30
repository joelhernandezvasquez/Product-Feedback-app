
import { FilterRoadmapItems } from '../components/RoadmapFeedback/FilterRoadmapItems';
import { RoadmapHeader } from '../components/RoadmapFeedback/RoadmapHeader';

export const RoadmapPage = () => {
  return (
    <section className='roadmap-wrapper'>
     <RoadmapHeader/>
     <FilterRoadmapItems/>
    </section>
  )
}
