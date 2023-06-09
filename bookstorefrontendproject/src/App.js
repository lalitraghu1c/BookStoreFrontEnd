import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import BookStoreLogin from './Pages/BookStoreLogin/BookStoreLogin';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Router1 from './Router/Router1';
import Header from './Components/Header/Header';
import BookDesignCatalogue from './Components/BookDesignCatalogue/BookDesignCatalogue';
import StartUp from './Components/StartUp/StartUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import BookDetailCatalogue from './Components/BookDetailCatalogue/BookDetailCatalogue';
import Cart from './Components/Cart/Cart';
import WishList from './Components/Wishlist/Wishlist';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <BookStoreLogin /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      <Router1 />
      {/* <Header /> */}
      {/* <BookDesignCatalogue /> */}
      {/* <StartUp /> */}
      {/* <Dashboard /> */}
      {/* <BookDetailCatalogue /> */}
      {/* <Cart /> */}
      {/* <WishList /> */}
    </div>
  );
}

export default App;
