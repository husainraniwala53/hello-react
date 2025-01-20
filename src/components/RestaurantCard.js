import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    const {restList} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = restList?.info;
    return (
      <div className="rest-card" style={styleCard}>
        <img
          className="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
  
        <h2>{name}</h2>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.deliveryTime} Minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;