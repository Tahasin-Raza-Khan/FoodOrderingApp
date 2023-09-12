import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
const Cart=()=>{

  const cartItems =useSelector((store)=>store.cart.items)
    return (
      <div>
        <h1 className="font-bold text-3xl">Cart Items- {cartItems.length}</h1>
        <FoodItems {...cartItems[0]}/>
      </div>
    )

}
export default Cart;