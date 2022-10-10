import { useState,useCallback } from 'react';
import {FeedbackBoardMenu} from './FeedbackBoardMenu';
import openMenuIcon from '../../../assets/hamburgerIcon.png';
import closeMenuIcon from '../../../assets/closeIcon.png';

export const FeedbackBoardHeader = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const handleCloseMenu = useCallback(()=>{
    setIsMenuOpen((c) => !isMenuOpen);
  },[isMenuOpen])

  return (
    <div className="feedback-header max-width-wrapper">
      
      <h1 className="feedback-header-title capitalize w-700">frontend mentor 
       <span>feedback board</span>
      </h1>
      
      <button className='btn-image' type="image" onClick={handleCloseMenu}>
        <img src={!isMenuOpen? openMenuIcon :closeMenuIcon} alt=""/>
      </button>

      {isMenuOpen && <FeedbackBoardMenu closeMenu = {handleCloseMenu}/> }
     
    </div>
  )
}
