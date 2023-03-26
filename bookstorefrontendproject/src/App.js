import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import BookStoreLogin from './Pages/BookStoreLogin/BookStoreLogin';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Router1 from './Router/Router1';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <BookStoreLogin /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      <Router1 />
    </div>
  );
}

export default App;
