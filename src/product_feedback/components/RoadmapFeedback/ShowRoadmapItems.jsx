import { RoadmapItemCard } from "./RoadmapItemCard"

export const ShowRoadmapItems = ({roadmapItems}) => {
  return (
  <ul>
  {roadmapItems.map((item)=>{
   return <RoadmapItemCard key={item.id} {...item}/>
  })}
  </ul>
  )
}
