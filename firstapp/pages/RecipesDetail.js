import Navbar from "../comps/Navbar";
import IngBox from "../comps/RecipesDetail/IngBox";
import StepsBox from "../comps/RecipesDetail/StepsBox";

export default function RecipesDetail(){
    
  return <div>
      <h1>Tofu Bahn Mi</h1>
      <IngBox />
      <StepsBox />
      <Navbar />

  </div>
}