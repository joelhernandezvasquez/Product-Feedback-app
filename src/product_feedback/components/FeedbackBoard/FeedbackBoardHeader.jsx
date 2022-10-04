
import openMenuIcon from '../../../assets/hamburgerIcon.png';
export const FeedbackBoardHeader = () => {
  return (
    <div className="feedback-header max-width-wrapper">
      
      <h1 className="feedback-header-title capitalize w-700">frontend mentor 
       <span>feedback board</span>
      </h1>
      
      <button className='btn-image' type="image">
        <img src={openMenuIcon} alt=""/>
      </button>

    </div>
  )
}
