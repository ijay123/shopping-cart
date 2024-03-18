import "./App.css";
import Home from "./components/home/Home";
import Navigaton from "./components/navigation/Navigaton";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./components/cart-checkoutList/CheckOut";
// Other imports

function App() {
  return (
    <div className="App">
      <Router>
        <Navigaton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
