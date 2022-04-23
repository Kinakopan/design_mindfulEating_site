import ImgCard from "../comps/ImgCard";
import RestaurantCard from "../comps/RestaurantCard";
import SideNav from "../comps/Navbar/SideNav";
import Navbar from "../comps/Navbar";



export default function Restaurant(){
    
    return ( 
    <div>
        <h1>Restaurant</h1>

        <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Grains"
        index4="Quinoa"
        address1="/restaurant"
        ></SideNav>

        <ImgCard 
        img="/restaurant.png"
        bg="#E0E8FD"/>

    
    <main>
        <RestaurantCard>
        </RestaurantCard>
        
        <RestaurantCard
            img="/juice truck.png"
            h2="The Juice Truck"
            txt="Cold pressed juice shop offering also smoothies, acaibowls, grab-n-go prepared foods like salads, lunch bowls."
        ></RestaurantCard>

        <RestaurantCard
            img="/veggie bowl.png"
            h2="Veggiebowl"
            txt="Vegetarian Vietnamess food restaurant operating since 2013. Menu is concise and features dishes with tofu, noodles, baguette, and rolls."
        ></RestaurantCard>

         <RestaurantCard
            img="/vegan pizza.png"
            h2="Vegan Pizza House"
            txt="Fast food style vegan restaurant offering an extensive menu of pizzas and other foods like pasta, donairs, baked lasagna and spaghetti."
        ></RestaurantCard>

        <RestaurantCard
            img="/Tama img.png"
            h2="Tama Organic Life"
            txt="Organic shop selling fresh produce and Japanese specialty items. Its kitchen makes takeaway hot vegan lunch boxes, wraps and sandwiches."
        ></RestaurantCard>
        
        <br/>

        <Navbar></Navbar>

    </main>
    </div>
 
    )
}


 
  




