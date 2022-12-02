import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { RoadmapFilterMobileMenu } from "./RoadmapFilterMobileMenu";
import { ShowRoadmapItems } from "./ShowRoadmapItems";
import { getFeedbacksByCategory } from "../../../helpers/getFeedbacksByCategory";
import { setRoadmapItems } from "../../../helpers/setRoadmapItems";
import { statusCategory,categoryPrompt } from "../../../constant";

export const FilterMobileRoadmapItems = () => {
  const {feedbacks} = useSelector((state)=> state.feedback);
  const {planned,inProgress,live} = setRoadmapItems(feedbacks);
  const [activeRoadmapItem,setActiveRoadmapItem] = useState({
    item:statusCategory[0].option,
    id:0
  });
  const [roadmapItems,GetRoadmapItems] = useState([]);

  useEffect(()=>{
    GetRoadmapItems(getFeedbacksByCategory(feedbacks,activeRoadmapItem.item));
  },[activeRoadmapItem,feedbacks])
  
  const toogleRoadmapItem = (option,id) =>{
    setActiveRoadmapItem({item:option,id});
  }
  const setItemQuantity = (id)=>{
     if(id === 0) return <span>{planned}</span>;
     if(id === 1) return <span>{inProgress}</span>;
     if(id===2) return  <span>{live}</span>;
  }

  return (
    <section className="filter-mobile-roadmapItems">
      <RoadmapFilterMobileMenu
       activeRoadmapId={activeRoadmapItem.id}
       toogleRoadmapItem = {toogleRoadmapItem}
       setItemQuantity = {setItemQuantity}
      />
   
    <h2 className="roadmap-filter-heading">{activeRoadmapItem.item} ({setItemQuantity(activeRoadmapItem.id)})</h2>
    <p className="roadmap-filter-sub-heading">{categoryPrompt[activeRoadmapItem.id].prompt}</p>

   <ShowRoadmapItems roadmapItems={roadmapItems}/>
 </section>
  )
}
