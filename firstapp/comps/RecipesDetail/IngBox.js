import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledIngBox = styled.div` 
font-family: 'm plus 1', sans-serif;
display:flex;
flex-direction: column;
color:${props=>props.text_color};
background-color: #ffffff;
border-radius:20px 0px 0px 0px;
width:360px;
`;

const ImageIng = styled.img`
height:220px;
width:360px;
border-radius:20px 0px 0px 0px;
`

const Box1 = styled.div`
display:flex;
flex-direction: column;
width:350px;
margin-left:10px;
`
const Box2 = styled.div`
display:flex;
flex-direction: row;
width:350px;
`

const Box2_1 = styled.ul`
width:300px;
`
const Box2_2 = styled.div`
display:flex;
flex-direction: column;
margin-top:40px;
`

const Paragraph = styled.p`
color:#878686;
`

const CartBtn = styled.img`
height:30px;
width:30px;
margin:6px;
`

export default function IngBox({
  img="/rectangle_18.png", 
  tcl="#08213E",
}){
  const r = useRouter()

  return <StyledIngBox text_color={tcl}>
  <ImageIng src={img} />
  <Box1>
    <h3>Ingredients</h3>
    <ul>
      <li>Common ingredients</li>
      <Paragraph>Tofu, 1 carrot, 1 daikon, 1/2 onion,  mayonnaise, Sriracha, 3 cloves garlic,  cilantro, baguette</Paragraph>
    </ul>
  </Box1>

  <Box2>
    <Box2_1>
      <li>Rare ingredients</li>
      <Paragraph>Rice vinegar</Paragraph>
      <Paragraph>Lemongrass</Paragraph>
      <Paragraph>2 jalapenos</Paragraph>
    </Box2_1>

    <Box2_2>
      <CartBtn src="/cartBtn.png" onClick = {()=>r.push("/Recipes")}/>
      <CartBtn src="/cartBtn.png" onClick = {()=>r.push("/Recipes")}/>
      <CartBtn src="/cartBtn.png" onClick = {()=>r.push("/Recipes")}/>
    </Box2_2>
  </Box2>

</StyledIngBox>
}