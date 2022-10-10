import { Link } from "react-router-dom"
import { roadmapItems } from "../../../constant";

export const RoadmapFeedback = () => {
  return (
    <div className="roadmap-feedback">
       <h2 className="d-flex d-flex-align-center d-flex-space-between" aria-describedby="Roadmap">
        <span className="title capitalize fw-700">roadmap</span>
        <Link to={"/roadmap"}>View</Link>
     </h2>

     <ul className="roadmap-menu-item" id="Roadmap">

        {roadmapItems.map(({id,item,bulletColor})=>{
            return (
                <li key={id} className="d-flex d-flex-space-between capitalize">
                <p> <span style={{backgroundColor:bulletColor}} className="roadmap-bullet-point"></span>{item}</p>
                <span className="roadmap-count fw-700">2</span>
             </li> 
            )
        })}
      
     </ul>


    </div>
  )
}
