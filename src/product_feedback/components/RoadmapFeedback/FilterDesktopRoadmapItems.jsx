import { useRef} from "react";
import { useSelector } from "react-redux";
import { ColumnRoadmapItems } from "./ColumnRoadmapItems";
import { STATUS_PLANNED,STATUS_INPROGRESS,STATUS_LIVE } from "../../../constant";
import { getFeedbacksByCategory } from "../../../helpers/getFeedbacksByCategory";

export const FilterDesktopRoadmapItems = () => {
  
    const {feedbacks} = useSelector((state)=> state.feedback);
    const plannedItemsRef = useRef();
    const inProgressItemsRef = useRef();
    const liveItemsRef = useRef();

    if(feedbacks.length < 1){
        return;
    }
    plannedItemsRef.current = getFeedbacksByCategory(feedbacks,STATUS_PLANNED);
    inProgressItemsRef.current = getFeedbacksByCategory(feedbacks,STATUS_INPROGRESS);
    liveItemsRef.current = getFeedbacksByCategory(feedbacks,STATUS_LIVE);

  return (
    <section className="filter-desktop-roadmapItems">
      <ColumnRoadmapItems 
      columnTitle={STATUS_PLANNED} 
      columnSubheading = {'Ideas prioritized for research'}
      columnDataItems = {plannedItemsRef.current}
      /> 

    <ColumnRoadmapItems 
      columnTitle={STATUS_INPROGRESS} 
      columnSubheading = {'Currently being developed'}
      columnDataItems = {inProgressItemsRef.current}
      />
      
      <ColumnRoadmapItems 
      columnTitle={STATUS_LIVE} 
      columnSubheading = {'Released features'}
      columnDataItems = {liveItemsRef.current}
      /> 


    </section>
  )
}
