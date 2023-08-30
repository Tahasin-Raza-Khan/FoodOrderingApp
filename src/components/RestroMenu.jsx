import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { restroImageLink } from "../utils/config";

const RestroMenu = () => {
  const { resId } = useParams();
  const [restroDetails, setRestroDetail] = useState(null);
  useEffect(() => {
    fetchRestroDetails();
  }, []);
  async function fetchRestroDetails() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    console.log("test", json?.data);
    setRestroDetail(json?.data);
  }

  if (!restroDetails) return <Shimmer />;

  const { name, id, cloudinaryImageId, costForTwoMessage, cuisines } =
    restroDetails?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restroDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome to the Restro : {name}</h1>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RestroMenu;
