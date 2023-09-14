import { restroImageLink } from "../utils/config";
const FoodItems= ({name,imageId,description})=>{


    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
       <img src={restroImageLink+imageId} alt="" />
       <h2 className="font-bold text-lg">{name}</h2>
       <h3>{description}</h3>
      </div>

    )


}
export default FoodItems;