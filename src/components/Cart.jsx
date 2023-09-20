import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodItems from "./FoodItems";
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import { clearAll } from "../utils/store/slice/cartSlice"
import emptyCartImage from "../images/emptyCart.png";
const Cart=()=>{
  const dispatch = useDispatch();
 const  handleClear =()=>{
    dispatch(clearAll());
 }
  const cartItems =useSelector((store)=>store.cart.items);
    return (
      <div className="text-center m-4 p-4 ">

        {cartItems.length>0 && <h1 className="text-2xl font-bold">Item Added</h1>}
        <div className="w-6/12 m-auto shadow-2xl px-2 py-2 ">
         <FoodItems menuData={cartItems}/>
         {
           cartItems.length> 0 ? <div>
           <Button onClick={()=> handleClear()} variant="contained">Clear All {<ClearIcon/>}</Button>
           </div> : <div className="text-center m-auto">
             <img className="text-center m-auto  p-2" src={emptyCartImage} alt=""  />
             <h1 className="text-xl font-bold my-6">Your cart is empty</h1>
             <h3 className="font-light p-2">You can go to home page to view more restaurants</h3>
             <Link to="/">
              <div className="p-3">
              <Button  variant="contained">SEE RESTUARANT NEAR YOU </Button>
              </div>
             </Link>
             </div>
         }
        </div>
        
      </div>
    )

}
export default Cart;