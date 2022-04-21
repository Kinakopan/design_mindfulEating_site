import styled from 'styled-components';

const StyledCard = styled.div`
font-family: 'm plus 1', sans-serif;
color:${props=>props.text_color};
height:150px;
width:350px;
display:flex;
top:${props=>props.top_prop}; 
right:10px;
padding-top:40px;
margin:30px 0px 30px;
`;

const Image = styled.img`
float:left;
height:150px;
width:35%;
border-radius:20px 0px 0px 20px;
`;

const ColumR = styled.span`
float:right;
width:60%;
right:0px;
margin-left:20px;
`

const Title = styled.p`
color:${props=>props.text_color};
font-family: 'm plus 1', sans-serif;
font-size:20px;
`;

const Para = styled(Title)`
font-size:16px;
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