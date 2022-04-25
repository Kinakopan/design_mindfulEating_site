import Navbar from "../comps/Navbar";
import IngBox from "../comps/RecipesDetail/IngBox";
import StepsBox from "../comps/RecipesDetail/StepsBox";
import LazyBtn from "../comps/RecipesDetail/LazyBtn";
import MainMenu from "../comps/MainMenu";
import SideNav from "../comps/Navbar/SideNav";
import TopBtn from "../comps/TopBtn";

import styled from 'styled-components';


const StyledRecipesDetail = styled.div`
background-color: #E0E8FD;
display:flex;
flex-direction:column;
align-items:end;
`


const StySteps = styled.div`
display:flex;
flex-direction:column;
width:360px;
border-radius:0px 20px 20px 0px;
overflow:hidden;
`


export default function RecipesDetail({
  
}){
    
  return <StyledRecipesDetail>
      <MainMenu></MainMenu>
      <h1>Tofu Bahn Mi</h1>
      <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Grains"
        index4="Quinoa"
        ></SideNav>

      <IngBox />
      <LazyBtn />

      <StySteps>
        <StepsBox 
        img=""
        />

        <StepsBox
        number="2"
        text="Make vegetable pickles: Mix chopped carrots, radishes, onions,a cup of rice vinegar, 3 spoons of maple syrup, and 2 teaspoons of salt in a bowl."
        img=""
        />

        <StepsBox
        number="3"
        text="Make marinade: 1/4 cup soy sauce, 2 teaspoons sesame oil, 2 teaspoons maple syrup, 3 cloves of garlic, 3 inches of lemon gras, 1/2 inch ginger, 1/3 cup coriander, 3/4 teaspoons of salt and black pepper, and mix until smooth."
        img=""
        />

        <StepsBox 
        number="4"
        text="Heat the oil in a large pot and  cook the tofu for about 3 minutes per side until golden. Then put the baked tofu back in the sauce for about 10 minutes."
        img=""
        />

        <StepsBox
        number="5"
        text="To assemble: Spread baguettes with spicy mayo. Top with tofu, cilantro, basil, pickled vegetables (shaking off pickling liquid first), cucumber, and jalapeños."
        />
      </StySteps>
      
      <TopBtn />
      <Navbar />
  </StyledRecipesDetail>
}