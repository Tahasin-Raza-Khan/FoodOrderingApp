import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { restroImageLink } from "../utils/config";
import useRestro from "../hooks/useRestro";

const RestroMenu = () => {
  const { resId } = useParams();
  const restroDetails = useRestro(resId);
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
