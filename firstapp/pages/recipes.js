import Navbar from "../comps/Navbar";
import RecipeCard from "../comps/Recipes/RecipeCard";
import TofuComp from "../comps/Recipes/TofuComp";

import styled from 'styled-components';
const StyledRecipes = styled.div`
display:block;
`;

export default function Recipes(){
    return (
    <StyledRecipes>
        <h1>Recipes</h1>

        <TofuComp />

        <RecipeCard />
        
        <RecipeCard 
        img="/recipes2.png"
        title="Tofu Bibimbap"
        paragraph="Korean food with various vegetables mixed with rice."
        />
       
        <RecipeCard 
        img="/recipes3.png"
        title="Tofu Cutlet Curry"
        paragraph="Korean food with various vegetables mixed with rice."
        />

        <RecipeCard 
        img="/recipes4.png"
        title="Mapo Tofu"
        paragraph="Spicy Sichuan style tofu dish with rice."
        />

        <Navbar />
    </StyledRecipes>
    )
}