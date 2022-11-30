
export const getFeedbacksByCategory = (feedbacks,category) => {
 
  return feedbacks.filter((feedback)=> feedback.status === category)
}