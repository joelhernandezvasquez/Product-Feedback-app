

export const CategoryFeedback = () => {
    const categoryOptions = ['All','UI','UX','Enhacement','Bug','Feature'];
  
    return (
    <ul className="category-feedback-container category-content">
      {categoryOptions.map((option,index)=>{
        return <li key={index}> <button className="btn-opaque-pink">{option}</button></li>
      })}
    </ul>
  )
}
