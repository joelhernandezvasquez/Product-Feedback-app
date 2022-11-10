
export const getFeedback = (feedbacks,id) =>{
 
    return feedbacks.find((feedback)=> feedback.id === id)
}