import { useMemo } from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { setRoadmapItems } from "../../../helpers/setRoadmapItems";

export const RoadmapFeedback = () => {
  
   const {feedbacks} = useSelector((state)=> state.feedback);
   const {planned,inProgress,live}  = useMemo(() => setRoadmapItems(feedbacks), [feedbacks]);
  
  return (
    <div className="roadmap-feedback">
       <h2 className="d-flex d-flex-align-center d-flex-space-between" aria-describedby="Roadmap">
        <span className="title capitalize fw-700">roadmap</span>
        <Link to={"/roadmap"}>View</Link>
     </h2>

     <ul className="roadmap-menu-item" id="Roadmap">

     <li className="d-flex d-flex-space-between capitalize">
         <p> <span style={{backgroundColor:'#F49F85'}} className="roadmap-bullet-point"></span>planned</p>
         <span className="roadmap-count fw-700">{planned}</span>
      </li> 

      <li  className="d-flex d-flex-space-between capitalize">
         <p> <span style={{backgroundColor:'#AD1FEA'}} className="roadmap-bullet-point"></span>in-Progress</p>
         <span className="roadmap-count fw-700">{inProgress}</span>
      </li> 

      <li className="d-flex d-flex-space-between capitalize">
         <p> <span style={{backgroundColor:'#62BCFA'}} className="roadmap-bullet-point"></span>live</p>
         <span className="roadmap-count fw-700">{live}</span>
      </li> 
   
     </ul>

    </div>
  )
}
