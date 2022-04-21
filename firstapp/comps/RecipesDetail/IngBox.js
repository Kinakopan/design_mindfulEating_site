import styled from 'styled-components';

const StyledIngBox = styled.div`
background-color:${props=>props.color}; 
color:${props=>props.text_color};
`;

export default function IngBox(){
  return <StyledIngBox color={bg} text_color={tcl}>
  <img src={img} />
  <h2></h2>
  <p></p>
</StyledIngBox>
}