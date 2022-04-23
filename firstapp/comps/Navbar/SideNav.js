import styled from "styled-components";

import { useRouter } from "next/router";

const SideCont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  position: fixed;
  gap: 2em;
  padding: 1em 0 0 1em;
  z-index: 100;
  
`;

const NavButton = styled.div`
  writing-mode: vertical-lr;
  font-size: 1.2em;
  color: #A2B0D3;
`;

export default function SideNav({
  index1="",
  index2="",
  index3="",
  index4="",
  address1=""
}){

  const r = useRouter();

  return <SideCont>
    
    <NavButton onClick = {
      ()=>r.push("RecipesDetail")
    }>
    {index1}</NavButton>    
    
    <NavButton>
    {index2}</NavButton>    
    
    <NavButton>
    {index3}</NavButton>    
    
    <NavButton>
    {index4}</NavButton>

  </SideCont>
}