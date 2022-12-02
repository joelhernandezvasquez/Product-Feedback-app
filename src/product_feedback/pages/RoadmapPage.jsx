
import { FilterDesktopRoadmapItems } from '../components/RoadmapFeedback/FilterDesktopRoadmapItems';
import { FilterMobileRoadmapItems } from '../components/RoadmapFeedback/FilterRoadmapItems';
import { RoadmapHeader } from '../components/RoadmapFeedback/RoadmapHeader';

export const RoadmapPage = () => {
  return (
    <section className='roadmap-wrapper'>
     <RoadmapHeader/>
     <FilterMobileRoadmapItems/>
     <FilterDesktopRoadmapItems/>
    </section>
  )
}
