import styled from 'styled-components';

const StyledCard = styled.div`
background-color:${props=>props.color}; 
color:${props=>props.text_color};
`;
//>>>>>>>>>>>>>>>>>>>>>

export default function RecipeCard({
  img="/", 
  bg="red",
  tcl="#FFF"//>>>>>>>>>>>>>>>>
}){

  return <StyledCard color={bg} text_color={tcl}>
    <img src={img} />
    <h2></h2>
    <p></p>
  </StyledCard>

}