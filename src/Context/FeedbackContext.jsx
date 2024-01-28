import { createContext, useReducer } from "react";
import FeedbackReducer from "./FeedbackReducer";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // Initial State
  const initialState = {
    feedbacks: [],
    edit: { feedback: {}, isEdit: false },
  };

  //Reducer
  const [state, dispatch] = useReducer(FeedbackReducer, initialState);

  //Delete

  return (
    <FeedbackContext.Provider
      value={{
        // feedbacks: state.feedbacks,
        // edit: state.edit,
        ...state,
        dispatch,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
