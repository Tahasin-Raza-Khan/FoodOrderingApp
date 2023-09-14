import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuList from "./MenuList";
const MenuAccordian = ({ data }) => {
  console.log("test", data);
  const { title } = data;
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-xl p-4  ">
      <div className="flex justify-between">
      <span className="font-bold text-lg p-2 m-2">
        {title} ({data?.itemCards?.length})
      </span>
      <span>
        <KeyboardArrowDownIcon />
      </span>
      </div>
      <MenuList menuData={data?.itemCards} />
    </div>
  );
};

export default MenuAccordian;
