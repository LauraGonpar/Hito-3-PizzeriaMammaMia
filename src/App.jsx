import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { RegisterPage } from "./components/RegisterPage";
import "./App.css";
import { LoginPage } from "./components/LoginPage";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div>
      <NavbarComponent />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
