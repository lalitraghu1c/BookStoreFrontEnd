import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import BookStoreLogin from '../../Pages/BookStoreLogin/BookStoreLogin'
import ForgotPassword from '../../Pages/ForgotPassword/ForgotPassword'
import ResetPassword from '../../Pages/ResetPassword/ResetPassword'


function Router1() {
    return (
      <div>
        <Router>
          <Routes>
              <Route path= '/' element ={<BookStoreLogin/>} />
              <Route path='/ForgotPassword' element={<ForgotPassword />} />
              <Route path='/ResetPassword' element={<ResetPassword />} />
          </Routes>
        </Router>
      </div>
    )
  }

  export default Router1
