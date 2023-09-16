import vegLogo from "../images/veg-icon.png";
import nonVegLogo from "../images/non-veg-icon.png";
import { restroImageLink } from "../utils/config";
const MenuList = ({ menuData }) => {
  console.log("item", menuData);
  return (
    <div>
      {menuData?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-3 m-2 border-b-2 flex justify-between bg-rose-50"
        >
          <div className="text-left w-10/12">
            <span>
              {item?.card?.info?.isVeg ? (
                <img className="w-4" src={vegLogo} />
              ) : (
                <img className="w-4" src={nonVegLogo} />
              )}
            </span>
            <span className="font-bold">{item?.card?.info?.name}</span>
            <div className="font-medium">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.finalPrice/100}
            </div>
            <div >
              <p className="text-sm font-light">{item?.card?.info?.description ?item?.card?.info?.description : item?.card?.info?.name}</p>
            </div>
          </div>
          <div className="w-2/12  p-2">
          <div className="absolute font-semibold">
            
            <button className="w-16 mx-4 my-20 bg-white shadow-lg text-[#60b246] text-sm leading-7 ">
              ADD+
            </button>
          </div>
            <img
              className="h-24 rounded-md "
              src={restroImageLink + item?.card?.info?.imageId}
              alt="foodimg"
            />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
