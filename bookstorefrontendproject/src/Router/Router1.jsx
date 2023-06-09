import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from '../Components/SignUp/SignUp'
import BookStoreLogin from '../Pages/BookStoreLogin/BookStoreLogin'
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword'
import ResetPassword from '../Components/ResetPassword/ResetPassword'
import Dashboard from '../Pages/Dashboard/Dashboard'
import StartUp from '../Components/StartUp/StartUp'
import BookDetailCatalogue from '../Components/BookDetailCatalogue/BookDetailCatalogue'
import Wishlist from '../Components/Wishlist/Wishlist'
import Cart from '../Components/Cart/Cart'


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
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </div>
    )
  }

  export default Router1
