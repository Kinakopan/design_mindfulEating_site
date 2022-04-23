import Navbar from "../comps/Navbar";
import RecipeCard from "../comps/Recipes/RecipeCard";
import TofuComp from "../comps/Recipes/TofuComp";
import SideNav from "../comps/Navbar/SideNav";

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

        <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Grains"
        index4="Quinoa"
        address1="/restaurant"
        ></SideNav>

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
            paragraph="Japanese curry that goes well with tofu cutlets."
            top="1020px"
            />

            <RecipeCard 
            img="/recipes4.png"
            title="Mapo Tofu"
            paragraph="Spicy Sichuan style tofu dish with rice."
            top="1220px"
            />   
        </BgChange>

    <Navbar />
        
    </StyledRecipes>
    )
}