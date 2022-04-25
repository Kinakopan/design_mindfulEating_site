import Navbar from "../comps/Navbar";
import IngBox from "../comps/RecipesDetail/IngBox";
import StepsBox from "../comps/RecipesDetail/StepsBox";
import LazyBtn from "../comps/RecipesDetail/LazyBtn";

export default function RecipesDetail(){

  return <div>
      <h1>Tofu Bahn Mi</h1>
      <IngBox />
      <LazyBtn />
      <StepsBox />
      <Navbar />
  </div>
}
