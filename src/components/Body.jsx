import RestroCard,{isOpen} from "./RestroCard";
import { useState, useEffect } from "react";
import { filterRestro } from "../utils/helper";
import Shimmer from "./Shimmer";
import { apiDataLink } from "../utils/config";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restroLists, filterRestroList] = useState([]);
  const [fixRestroList, setFixRestroList] = useState([]);

  useEffect(() => {
    fetchRestuarantsList();
  }, []);

  async function fetchRestuarantsList() {
    const data = await fetch(apiDataLink);
    const json = await data.json();
    filterRestroList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFixRestroList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>No Internet Connection 🔴</h1>;
  }
  return !fixRestroList?.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-[#016A70] ">
        <input
          type="text"
          className="px-3 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="button"
          className="px-4 hover:bg-green-700 rounded-md bg-green-300"
          onClick={() => {
            filterRestroList(filterRestro(searchText, fixRestroList));
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap bg-[#016A70]">
        {!restroLists?.length && searchText ? (
          <h1 style={{ color: "red" }}>No result found</h1>
        ) : (
          restroLists?.map((restroinfo) => {
            return (
              <Link
                to={"/restro/" + restroinfo?.info?.id}
                key={restroinfo?.info?.id}
                style={{ textDecoration: "none", color: "#000" }}
              >
                {console.log(restroinfo.info)}
                <RestroCard {...restroinfo.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
