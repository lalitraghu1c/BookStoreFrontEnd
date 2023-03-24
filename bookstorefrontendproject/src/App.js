import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import BookStoreLogin from './Pages/BookStoreLogin/BookStoreLogin';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Router from './Components/Router/Router';

function App() {
  return (
    <div className="App">
      {/* <Login />
      <SignUp />
      <BookStoreLogin />
      <ForgotPassword />
      <ResetPassword /> */}
      <Router />
    </div>
  );
}

export default App;
