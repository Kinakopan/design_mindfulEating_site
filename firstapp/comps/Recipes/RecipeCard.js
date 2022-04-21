import styled from 'styled-components';

const StyledCard = styled.div`
font-family: 'm plus 1', sans-serif;
color:${props=>props.text_color};
width:300px;
display:flex;
top:${props=>props.top_prop}; 
right:10px;
padding-top:40px;
`;

const Image = styled.img`
float:left;
width:35%;
border-radius:20px 0px 0px 20px;
`;

const ColumR = styled.span`
float:right;
padding-left:20px;
padding-right:5px;
background-color:#FFFFFF
`

const Title = styled.p`
color:${props=>props.text_color};
font-family: 'm plus 1', sans-serif;
font-size:18px;
`;

const Para = styled.p`
font-size:14px;
`



export default function RecipeCard({
  img="/recipes1.png", 
  tcl="#08213E",
  title="Tofu Banh Mi",
  paragraph="Vietnamese sandwich made of baguette.",
  top="620px"
}){

  return <StyledCard text_color={tcl} top_prop={top}>
    <Image src={img} />

    <ColumR>
      <Title>{title}</Title>
      <Para>{paragraph}</Para>
    </ColumR>
    
  </StyledCard>

}