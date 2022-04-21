import ImgCard from "../comps/ImgCard";
import RestaurantCard from "../comps/RestaurantCard";



export default function Restaurant(){
    
    return ( 
    <div>
        <h1>Restaurant</h1>

        <ImgCard 
        img="/restaurant.png"
        bg="#E0E8FD"/>

    
  
        <RestaurantCard>
        </RestaurantCard>
   
        
        <RestaurantCard
            img="/juice truck.png"
            h2="The Juice Truck"
            txt="Cold pressed juice shop offering also smoothies, acaibowls, grab-n-go prepared foods like salads, lunch bowls."
        ></RestaurantCard>


        <RestaurantCard
            img="/juice truck.png"
            h2="The Juice Truck"
            txt="Cold pressed juice shop offering also smoothies, acaibowls, grab-n-go prepared foods like salads, lunch bowls."
        ></RestaurantCard>

        <RestaurantCard
            img="/juice truck.png"
            h2="The Juice Truck"
            txt="Cold pressed juice shop offering also smoothies, acaibowls, grab-n-go prepared foods like salads, lunch bowls."
        ></RestaurantCard>

        


    </div>
 
    )
}


 
  




