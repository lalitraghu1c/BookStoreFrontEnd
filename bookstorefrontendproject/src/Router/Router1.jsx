import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from '../Components/SignUp/SignUp'
import BookStoreLogin from '../Pages/BookStoreLogin/BookStoreLogin'
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword'
import ResetPassword from '../Components/ResetPassword/ResetPassword'
import Dashboard from '../Pages/Dashboard/Dashboard'
import StartUp from '../Components/StartUp/StartUp'
import BookDetailCatalogue from '../Components/BookDetailCatalogue/BookDetailCatalogue'


function Router1() {
    return (
      <div>
        <Router>
          <Routes>
              <Route path= '/' element ={<StartUp/>} />
              <Route path='/bookstorelogin' element={<BookStoreLogin />} />
              <Route path= '/dashboard' element ={<Dashboard/>} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route path='/resetpassword' element={<ResetPassword />} />
              <Route path= '/BookSummary' element ={<BookDetailCatalogue />} />
          </Routes>
        </Router>
      </div>
    )
  }

  export default Router1
