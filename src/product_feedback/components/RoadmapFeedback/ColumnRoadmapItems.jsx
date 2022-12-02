import { ShowRoadmapItems } from "./ShowRoadmapItems";

export const ColumnRoadmapItems = ({columnTitle,columnSubheading,columnDataItems}) => {
  return (
    <div className="column-roadmap-container">
       <h2 className="column-title">{columnTitle} ({columnDataItems.length})</h2>
       <p>{columnSubheading}</p>
      <ShowRoadmapItems roadmapItems={columnDataItems}/>
    </div>
  )
}
