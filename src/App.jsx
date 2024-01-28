import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'
import { FeedbackProvider } from './Context/FeedbackContext'
import ReviewCount from './Components/ReviewCount';

const App = () => {
  return (
    <FeedbackProvider>
      
      <Navbar/>
      <div className="container">
        <Form/>
        <ReviewCount/>
        <ListGroup/>
      <ToastContainer />
      </div>
    </FeedbackProvider>
  )
}

export default App


