    import { useState,useEffect} from "react";
    import Loader from "./Loader";
    import { useParams } from "react-router-dom";
    import { Menu_API } from "../utils/constants";

    const RestaurantMenu =  () => {

        const {resId} = useParams();
        const [restMenu,setRestMenu] = useState(null);
        console.log("component loaded"); 
        console.log(Menu_API + resId);
        useEffect(() => {
            fetchMenu();
        },[]);

        const fetchMenu = async() => {
           
            const data = await fetch(Menu_API + resId);
            const json = await data.json();
            console.log(json);
            setRestMenu(json.data);
        };
    
        if(!restMenu){
            return <Loader/>;
        }

        const {name,cuisines,costForTwoMessage} = restMenu?.cards[2]?.card?.card?.info;
        const{itemCards} = restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log(itemCards);
        return (
            <div>
                <h1>{name}</h1>
                <p>{cuisines.join(", ") + " " + costForTwoMessage}</p>
            <ul>
            
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price / 100 || item.ca.info.defaultPrice / 100}</li> )}
            </ul>
            </div>
        );
    }

    export default RestaurantMenu;