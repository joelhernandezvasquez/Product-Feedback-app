import { LEAST_COMMENTS, LEAST_UPVOTES, MOST_COMMENTS, MOST_UPVOTES } from "../constant";

export const getFeedbackByFilterOption = (feedbacks,filterOption) =>{

   let feedbackSorted = [...feedbacks];
    
  if(filterOption === MOST_UPVOTES ){
    feedbackSorted = filterFeedbackByMostVote(feedbackSorted);
  }

  else if(filterOption === LEAST_UPVOTES){
     feedbackSorted = filterFeedbackByLeastVote(feedbackSorted);
  }

  else if(filterOption === MOST_COMMENTS){
   feedbackSorted = filterFeedbackByMostComments(feedbackSorted);
  }

  else if(filterOption === LEAST_COMMENTS){
   feedbackSorted = filterFeedbackByLeastComments(feedbackSorted);
  }
  else
  {
   throw new Error(`Error: the filter option passed is invalid:${filterOption}`);
  }

  return feedbackSorted;

}

const filterFeedbackByMostVote = (feedbacks) =>{
   feedbacks.sort((a,b)=>{
      return b.vote - a.vote
   })
   return feedbacks;
}

const filterFeedbackByLeastVote = (feedbacks) => {
   feedbacks.sort((a,b)=>{
      return a.vote - b.vote
   })
   return feedbacks;
}

const filterFeedbackByMostComments = (feedbacks) =>{
   feedbacks.sort((a,b)=>{
      return b.comments.length - a.comments.length
   }) 
     return feedbacks;
}

const filterFeedbackByLeastComments = (feedbacks) =>{
   feedbacks.sort((a,b)=>{
      return a.comments.length - b.comments.length
   }) 
   return feedbacks; 
}