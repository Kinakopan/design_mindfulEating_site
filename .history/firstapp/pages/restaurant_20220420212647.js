import ImgCard from "../comps/ImgCard";
import RestaurantCard from "../comps/RestaurantCard";



export default function Restaurant(){
    
    return ( 
    <div>
        <h1>Restaurant</h1>

        <ImgCard 
        img="/restaurant.png"
        bg="#E0E8FD"/>

    
    <main>
        <RestaurantCard>
        </RestaurantCard>
        <br></br>
        
        <RestaurantCard
        img="/juice truck.png"
        h2="The Juice Truck"
        ></RestaurantCard>

        

    </main>
    </div>
 
    )
}


 
  




