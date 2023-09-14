import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { restroImageLink } from "../utils/config";
import useRestro from "../hooks/useRestro";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slice/cartSlice";
import MenuAccordian from "./MenuAccordian";

const RestroMenu = () => {
  const { resId } = useParams();
  const restroDetails = useRestro(resId);
  const dispatch = useDispatch();
  const handleAddItem = (foodName) => {
    dispatch(addItem(foodName));
  };
  if (!restroDetails) return <Shimmer />;

  const { name, id, cloudinaryImageId, costForTwoMessage, cuisines } =
    restroDetails?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restroDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
 
  const menuCategory =
    restroDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(menuCategory);
  return (
    <div className="text-center">
      {/* <div>
        <h1 style={{ textAlign: "center" }} className="text-2xl">Welcome to the Restro : {name}</h1>
        <h3>{cuisines?.join(", ")}</h3>
        <h2>{costForTwoMessage}</h2>
        <h3>The Restro Menu </h3>
        <table>
          <tbody>
            {itemCards?.map((menuDeatils) => {
              return (
                <tr key={menuDeatils?.card?.info?.id}>
                  <td>
                    {menuDeatils?.card?.info?.name +
                      " Price - Rs " +
                      menuDeatils?.card?.info?.price / 100 +
                      ".00"}
                  </td>
                  <td>
                    <img
                      src={restroImageLink + menuDeatils?.card?.info?.imageId}
                      className="menu-image"
                      alt=""
                    />
                  </td>
                  <td>
                    <button
                      className="p-2 m-5 bg-green-400"
                      onClick={() => handleAddItem(menuDeatils?.card?.info)}
                    >
                      Add+
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{costForTwoMessage}- Cost for Two </p>
      {
        menuCategory?.map((menuCategory)=>(
          
          <MenuAccordian data={menuCategory?.card?.card} key={menuCategory?.card?.card?.title}/>
        ))
      }
    </div>
  );
};
export default RestroMenu;
