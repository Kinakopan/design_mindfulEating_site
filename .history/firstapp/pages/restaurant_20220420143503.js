import ImgCard from "../comps/ImgCard";
import RestaurantCard from "../comps/RestaurantCard";
import ReCont from "../comps/RestaurantCard";
import ReImg from "../comps/RestaurantCard";
import Starts from "../comps/RestaurantCard";


export default function Restaurant(){
    
    return ( 
    <div>
        <h1>Restaurant</h1>

        <ImgCard 
        img="/restaurant.png"
        bg="#E0E8FD"/>

    
    <main>
        <RestaurantCard>
        <Starts ></Starts>
        </RestaurantCard>

     

    </main>
    </div>
 
    )
}


 
  




