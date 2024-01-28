import React, { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'


const ReviewCount = () => {
 const{feedbacks}=useContext(FeedbackContext)
  const avg = feedbacks.reduce((p,c)=>{
  return p+parseInt(c.rating)
  },0)

  return (
    <div className='d-flex justify-content-between'>
      <p> Total Reviews : {feedbacks.length} </p>
      <p> Avg Rating :{avg} </p>
    </div>
  )
}

export default ReviewCount
