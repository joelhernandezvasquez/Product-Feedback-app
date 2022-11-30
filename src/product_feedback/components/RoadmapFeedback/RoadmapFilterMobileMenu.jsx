
import { statusCategory} from "../../../constant";

export const RoadmapFilterMobileMenu = ({activeRoadmapId,toogleRoadmapItem,setItemQuantity}) => {
  return (
    <div className="filter-roadmap-mobile">
    <ul className="roadmap-filter-menu-mobile">
      {statusCategory.map(({id,option})=>{
        return <li key={id} 
               className={`${activeRoadmapId === id && 'active'}`}
               onClick = {()=> toogleRoadmapItem(option,id)}
               >
                {option} ({setItemQuantity(id)})
              </li>
      })}
    </ul>
  </div>
  )
}
