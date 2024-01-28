import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import { saveFeedback, updateFeedback } from "../Context/FeedbackAction";
import { toast } from "react-toastify";

const Form = () => {
  const { edit, dispatch } = useContext(FeedbackContext);

  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      const data = updateFeedback(edit.feedback.id, rating, review);
      dispatch({
        type: "UPDATE",
        payload: data,
      });
      toast.success("Review Updated");
    } else {
      const data = saveFeedback(rating, review);
      dispatch({
        type: "SAVE",
        payload: data,
      });
      toast.success("Review Saved");
    }

    setRating("");
    setReview("");
  };

  useEffect(() => {
    setRating(edit.feedback.rating);
    setReview(edit.feedback.review);
  }, [edit]);
  return (
    <form
      className='my-3'
      onSubmit={handleSubit}
    >
      <select
        className='form-control rounded-0'
        value={rating}
        required
        onChange={(e) => setRating(e.target.value)}
      >
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>

      <textarea
        required
        className='form-control rounded-0 my-2'
        placeholder='Enter your Opinion'
        value={review}
        cols='0'
        rows='0'
        onChange={(e) => setReview(e.target.value)}
      ></textarea>

      <input
        type='submit'
        value='Add Review'
        className='btn btn-dark w-100 rounded-0'
      />
    </form>
  );
};

export default Form;
