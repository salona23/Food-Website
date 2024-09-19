import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className="m-6 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <button
            className="p-2 m-4 bg-green-500 rounded-2xl hover:bg-red-600 text-white"
            onClick={handleClearCart}>
                Clear Cart
            </button>
      </div>
      <div className="w-5/12 ">
        {cartItems.map((item) => (
          <ItemList 
          data={item} 

          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
