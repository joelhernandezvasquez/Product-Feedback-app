import { Link } from 'react-router-dom';
import emptyIllustration from '../../assets/illustration-empty.svg';

export const EmptyComments = () => {
  return (
   
   <section className="max-width-wrapper empty-comment-container">
      
      <article className='empty-comments d-flex d-flex-align-center d-flex-center primary-border-radius'>
      
      <div className='empty-comments-inner-container d-flex d-flex-column d-flex-align-center'>
        <img className='empty-comments-illustration' src={emptyIllustration} alt=""/>
        <h2 className='empty-comments-title'>There is no feedback yet.</h2>
        <p className='empty-comments-description fs-smallest text-center'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        <Link className="capitalize btn-add-feedback" to="/feedback"> + add feedback</Link>
      </div>
    
      </article>
     
    </section>
  )
}
