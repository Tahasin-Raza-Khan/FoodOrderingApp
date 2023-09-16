import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuList from "./MenuList";
const MenuAccordian = ({ data, isOpen, setIndex }) => {
  const { title } = data;
  const [isCollapse, setCollapse] = useState(true);

  const handleClick = () => {
    setIndex();

    isOpen && isCollapse ? setCollapse(false) : setCollapse(true);
  };

  console.log(isCollapse, isOpen);
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-xl p-4  ">
      <div
        className="flex justify-between cursor-pointer "
        onClick={handleClick}
      >
        <span className="font-bold text-lg p-2 m-2">
          {title} ({data?.itemCards?.length})
        </span>
        <span>
          <KeyboardArrowDownIcon />
        </span>
      </div>
      {isCollapse && isOpen && <MenuList menuData={data?.itemCards} />}
    </div>
  );
};

export default MenuAccordian;
