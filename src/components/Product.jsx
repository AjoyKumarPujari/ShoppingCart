import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
  const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item add To The Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Remove Successfully");
  }

  return (
  
  <div className="flex flex-col items-center justify-between">
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div>
        <img src={`${post.image}`}/>
      </div>
      <div>
      <p>{post.price}
      </p>
      </div>

      {
        cart.some((p) => p.id == post.id) ? 
        (<button 
        onClick={removeFromCart}>
          Remove Item
        </button>) :
        (
          <button
          onClick={addToCart}>
          Add to Card
          </button>
        )
      }
      
  </div>  
  );
};

export default Product;

