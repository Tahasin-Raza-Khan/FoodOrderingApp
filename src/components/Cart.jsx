import { useSelector } from "react-redux";
import MenuList  from './MenuList'
const Cart=()=>{

  const cartItems =useSelector((store)=>store.cart.items);
  console.log("cartItemsDetails",cartItems);
    return (
      <div className="text-center m-4 p-4 ">

        <h1 className="text-2xl font-bold">Item Added</h1>
        <div className="w-6/12 m-auto shadow-2xl px-2 py-2">
         <MenuList menuData={cartItems}/>
        </div>

      </div>
    )

}
export default Cart;