import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import { filterRestro } from "./helper";
import Shimmer from "./Shimmer";
import { apiDataLink } from "../utils/config";
import { Link } from "react-router-dom";

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
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFixRestroList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return !fixRestroList?.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="serach-bar-container">
        <input
          type="text"
          className="serach-bar"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            filterRestroList(filterRestro(searchText, fixRestroList));
          }}
        >
          Search
        </button>
      </div>
      <div className="restro-card-list">
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
