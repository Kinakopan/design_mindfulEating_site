import Navbar from "../comps/Navbar";
import IngBox from "../comps/RecipesDetail/IngBox";
import StepsBox from "../comps/RecipesDetail/StepsBox";
import LazyBtn from "../comps/RecipesDetail/LazyBtn";
import MainMenu from "../comps/MainMenu";
import SideNav from "../comps/Navbar/SideNav";
import TopBtn from "../comps/TopBtn";
import {numDatebase,tofu1Datebase} from"../data/rcpSteps_content";
import {commDatabase} from "../data/common_content";

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
align-self:flex-start;
`

const Header = styled.h1`
display:flex;
flex-direction:row;
align-self:flex-start;
margin-left:50px;
`


export default function RecipesDetail({
  
}){
    
  return <StyledRecipesDetail>
      <MainMenu></MainMenu>
      <Header>Tofu Bahn Mi</Header>
      <SideNav 
        bcl="#A2B0D3"
        index1="Tofu"
        index2="Beans"
        index3="Grains"
        index4="Quinoa"
        ></SideNav>

      <IngBox 
      common={commDatabase[0]}
      rare1="Rice vinegar"
      rare2="Lemongrass"
      rare3="2 jalapenos"
      />

      <LazyBtn />

      <StySteps>
        <StepsBox
        number={numDatebase[0]} 
        text={tofu1Datebase[0]}
        img=""
        />

        <StepsBox
        number={numDatebase[1]} 
        text={tofu1Datebase[1]}
        img=""
        />

        <StepsBox
        number={numDatebase[2]} 
        text={tofu1Datebase[2]}
        img=""
        />

        <StepsBox 
        number={numDatebase[3]} 
        text={tofu1Datebase[3]}
        img=""
        />

        <StepsBox
        number={numDatebase[4]} 
        text={tofu1Datebase[4]}
        />
      </StySteps>
      
      <TopBtn />
      <Navbar />
  </StyledRecipesDetail>
}