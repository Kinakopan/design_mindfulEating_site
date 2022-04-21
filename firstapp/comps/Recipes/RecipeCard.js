import styled from 'styled-components';

const StyledCard = styled.div`
background-color:${props=>props.color}; 
color:${props=>props.text_color};
height:150px;
width:350px;
dispaly:inline-block;
`;

const Image = styled.img`
display:flex;
background-color:${props=>props.color}; 
color:${props=>props.text_color};
height:150px;
width:35%;
`;

const Title = styled.h2`
display:flex;
color:${props=>props.text_color};
font-family: M PLUS 1;
font-size:20px;
width:75%;
`;

const Para = styled.p`
display:flex;
font-size:16px;
`



export default function RecipeCard({
  img="/recipes1.png", 
  tcl="#08213E",
  title="Tofu Banh Mi",
  paragraph="Vietnamese sandwich made of baguette."
}){

  return <StyledCard text_color={tcl}>
    <Image src={img} />
    <Title>{title}</Title>
    <Para>{paragraph}</Para>
  </StyledCard>

}