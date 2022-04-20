import styled from 'styled-components';

const StyledStepsBox = styled.div`
background-color:${props=>props.color}; 
color:${props=>props.text_color};
`;

export default function StepsBox(){
  return <StyledStepsBox color={bg} text_color={tcl}>
  <img src={img} />
  <h2></h2>
  <p></p>
</StyledStepsBox>
}