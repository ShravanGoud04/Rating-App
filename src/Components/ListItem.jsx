
import React, { useContext, useReducer} from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import { toast } from 'react-toastify'
import { dltFeedback,editFeedback } from "../Context/FeedbackAction";


const ListItem = ({feedback}) => {

  const {dispatch}= useContext(FeedbackContext)

  
  const handlDlte=(id)=>{
    const data =dltFeedback(id)

    dispatch({
      type:"DELETE",
      payload:data
    })
    toast.error("Review Deleted")
  }

  const handleEdit=(feedback)=>{
   const data= editFeedback(feedback)
    dispatch({
      type:"EDIT",
      payload:data
    })

  }
  return (
    <li className='list-group-item'>
     <h4 className="display-5">Rating :{feedback.rating}</h4>
     <h5 className="display-6">Review : {feedback.review}</h5> 
     <input className='btn btn-danger rounded-0 btn-sm float-end' type="button" value="Delete" onClick={()=>handlDlte(feedback.id)} />
     <input className='btn btn-warning rounded-0 btn-sm float-end mx-2' type="button" value="Edit" onClick={()=>handleEdit(feedback)} />
    </li>
  )
}

export default ListItem
