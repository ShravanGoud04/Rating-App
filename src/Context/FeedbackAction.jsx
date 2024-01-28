export const dltFeedback=(id)=>{
 return id;

}

// Save
export const saveFeedback=(rating,review)=>{
  const newFeedback={
    id:crypto.randomUUID(),
    rating:rating,
    review:review
  }
 return newFeedback
}

// Edit
export const editFeedback=(feedback)=>{
 return feedback


}

export const updateFeedback=(id,rating,review)=>{
  const newUpdate={
    id:id,
    rating:rating,
    review:review
  }
  return newUpdate
}