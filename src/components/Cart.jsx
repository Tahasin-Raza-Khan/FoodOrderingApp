import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
const Cart=()=>{

  const cartItems =useSelector((store)=>store.cart.items);
    return (
      <div className="flex">
        <h1 className="font-bold text-3xl">Cart Items- {cartItems.length}</h1>
        {
          cartItems?.map((item)=>(
            <FoodItems {...item} key={item.id}/>
          ))
        }
      </div>
    )

}
export default Cart;