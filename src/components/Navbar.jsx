import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return <div>
    
  <div className="flex flex-row justify-between"> 

    <NavLink to="/">
      <div>
      <img src="https://uploads.turbologo.com/uploads/design/preview_image/431581/preview_image20210729-12976-1cljcfe.png"/>
      </div>
    </NavLink>

    <div>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>

      <NavLink to="/cart">
        <div>
        <FaShoppingCart/>
        </div>
      </NavLink>
      
    </div>
  </div>
  </div>;
};

export default Navbar;
