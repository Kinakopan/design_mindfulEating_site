import styled from 'styled-components';

const StyledLazyBtn = styled.div`
background-color:${props=>props.color}; 
color:${props=>props.text_color};
`;
//>>>>>>>>>>>>>>>>>>>>>

export default function LazyBtn({
  img="/", 
  bg="red",
  tcl="#FFF"//>>>>>>>>>>>>>>>>
}){

  return <StyledLazyBtn color={bg} text_color={tcl}>
    <img src={img} />
    <h2></h2>
    <p></p>
  </StyledLazyBtn>

}