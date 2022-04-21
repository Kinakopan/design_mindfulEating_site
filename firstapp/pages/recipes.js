import Navbar from "../comps/Navbar";
import RecipeCard from "../comps/Recipes/RecipeCard";
import TofuComp from "../comps/Recipes/TofuComp";

import styled from 'styled-components';

const StyledRecipes = styled.div`

`;

const BgChange = styled.div`
background-color: #E0E8FD;
display: block;
height: 120vh;
display:flex;
flex-direction:column;
align-items:end;
`;


export default function Recipes(){
    return (
    <StyledRecipes>
        <h1>Recipes</h1>

        <TofuComp />

        <BgChange>
            <RecipeCard />
            
            <RecipeCard 
            img="/recipes2.png"
            title="Tofu Bibimbap"
            paragraph="Korean food with various vegetables mixed with rice."
            top="820px"
            />
        
            <RecipeCard 
            img="/recipes3.png"
            title="Tofu Cutlet Curry"
            paragraph="Korean food with various vegetables mixed with rice."
            top="1020px"
            />

            <RecipeCard 
            img="/recipes4.png"
            title="Mapo Tofu"
            paragraph="Spicy Sichuan style tofu dish with rice."
            top="1220px"
            />   
        </BgChange>
        
    </StyledRecipes>
    )
}