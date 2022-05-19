import Navbar from "../comps/Navbar";
import MainMenu from "../comps/MainMenu";
import RecipeCard from "../comps/Recipes/RecipeCard";
import TofuComp from "../comps/Recipes/TofuComp";
import SideNav from "../comps/Navbar/SideNav";
import TopBtn from "../comps/TopBtn";
import {imgDatebase,titleDatebase,paraDatebase} from '../data/recipes_content';


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
        <MainMenu></MainMenu>
        <h1>Recipes</h1>

        <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Grains"
        index4="Quinoa"
        ></SideNav>

        <TofuComp />

        <BgChange>
            <RecipeCard 
            img={imgDatebase[0]}
            title={titleDatebase[0]}
            paragraph={paraDatebase[0]}
            />

            <RecipeCard
            img={imgDatebase[1]}
            title={titleDatebase[1]}
            paragraph={paraDatebase[1]}
            path="../RD_Tofu2"
            />

            <RecipeCard
            img={imgDatebase[2]}
            title={titleDatebase[2]}
            paragraph={paraDatebase[2]}
            />

            <RecipeCard
            img={imgDatebase[3]}
            title={titleDatebase[3]}
            paragraph={paraDatebase[3]}
            />
        </BgChange>
    
    <TopBtn />
    <Navbar />

    </StyledRecipes>
    )
}
