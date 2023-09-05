import { useState, useEffect } from "react";
const useRestro = (resId) => {
  const [menuDetails, setMenuDetails] = useState(null);
  useEffect(() => {
    fetchRestroDetails();
  }, []);
  async function fetchRestroDetails() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    setMenuDetails(json?.data);
  }
  return menuDetails;
};
export default useRestro;
