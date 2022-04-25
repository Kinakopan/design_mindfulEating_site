import Navbar from "../comps/Navbar";
import MainMenu from "../comps/MainMenu";
import RecipeCard from "../comps/Recipes/RecipeCard";
import TofuComp from "../comps/Recipes/TofuComp";
<<<<<<< HEAD
import SideNav from "../comps/Navbar/SideNav";
=======
import TopBtn from "../comps/TopBtn";
>>>>>>> fe0957a5bb17a5381c47be4ad614c06d802b99cb

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
<<<<<<< HEAD
            <RecipeCard />

            <RecipeCard
=======
            <RecipeCard 
          
            />
            
            <RecipeCard 
>>>>>>> fe0957a5bb17a5381c47be4ad614c06d802b99cb
            img="/recipes2.png"
            title="Tofu Bibimbap"
            paragraph="Korean food with various vegetables mixed with rice."
            />

            <RecipeCard
            img="/recipes3.png"
            title="Tofu Cutlet Curry"
            paragraph="Japanese curry that goes well with tofu cutlets."
            />

            <RecipeCard
            img="/recipes4.png"
            title="Mapo Tofu"
            paragraph="Spicy Sichuan style tofu dish with rice."
<<<<<<< HEAD
            top="1220px"
            />
        </BgChange>

    <Navbar />

=======
            />   
        </BgChange>

    <Navbar />
    <TopBtn />
        
>>>>>>> fe0957a5bb17a5381c47be4ad614c06d802b99cb
    </StyledRecipes>
    )
}
