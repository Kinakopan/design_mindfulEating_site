import Navbar from "../comps/Navbar";
import RecipeCard from "../comps/Recipes/RecipeCard";
import TofuBox from "../comps/Recipes/TofuBox";

export default function Recipes(){
    return (
    <div>
        <h1>Recipes</h1>

        <TofuBox />

        <div>
            <p>Get the fresh tofu at your local market</p>
            <button src=""></button>
        </div>

        <RecipeCard 
            bg="#FDE8CA"/>
        <RecipeCard 
            tcl="#ABC980"
            img=""
        />
        <RecipeCard />
        <RecipeCard />
        
        <Navbar />
    </div>
    )
}