import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Cart from "./pages/Cart"

const App = () => {
  return (
  <div>
    {/* <Counter/> */}
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/cart"element={<Cart/>}/>
    </Routes>
  </div>);
};

export default App;
