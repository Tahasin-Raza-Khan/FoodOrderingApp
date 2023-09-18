import { useState } from "react";
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
  const [showIndex, setShowIndex] = useState(0);
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
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl text-rose-700">{name}</h1>
      <p className="font-bold text-lg text-green-700">
        {costForTwoMessage}- Cost for Two{" "}
      </p>
      {menuCategory?.map((menuCategory, index) => (
        <MenuAccordian
          data={menuCategory?.card?.card}
          key={menuCategory?.card?.card?.title}
          isOpen={showIndex === index ? true : false}
          setIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};
export default RestroMenu;
