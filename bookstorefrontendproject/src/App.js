import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import BookStoreLogin from './Pages/BookStoreLogin/BookStoreLogin';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <BookStoreLogin /> */}
      <ForgotPassword />
    </div>
  );
}

export default App;
