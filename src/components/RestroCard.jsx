import { restroImageLink } from "../utils/config";
const RestroCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  locality,
  areaName,
}) => {
  return (
    <div className="card">
      <img
        src={restroImageLink + cloudinaryImageId}
        alt="restro image"
        style={{
          width: "100%",
          height: "50%",
        }}
      />
      <h2>{name}</h2>
      <h3>⭐ {avgRating}</h3>
      <div className="cuisines">
        <h4>{cuisines.join(", ")}</h4>
      </div>
      <h4>
        Location -{locality}, {areaName}
      </h4>
    </div>
  );
};
export default RestroCard;
