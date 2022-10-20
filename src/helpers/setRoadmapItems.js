
export const setRoadmapItems = (feedbacks) =>{

  let planned = 0;
  let inProgress = 0;
  let live = 0;

   feedbacks.forEach(feedback => {
     if(feedback.status === 'Planned'){
        planned++;
     }
     else if(feedback.status ==='In Progress'){
        inProgress++;
     }
     else if(feedback.status === 'Live'){
        live++;
     }
   });

   return {
    planned,
    inProgress,
    live
   }
  
}