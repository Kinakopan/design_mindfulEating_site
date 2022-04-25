import styled from 'styled-components';

const StyledLazyBtn = styled.div`
font-family: 'm plus 1', sans-serif;
display:flex;
flex-direction: row;
background-color:#EF7F63; 
height:35px;
width:205px;
border-radius:20px;
color:${props=>props.text_color};
margin:40px 10px 40px 0;
`

const Icon = styled.img`
height:20px;
margin-left:20px;
margin-top:8px;
`

const Text = styled.p`
margin-left:7px;
margin-top:5px;
`

export default function LazyBtn({
  img="/sofaIcon.png", 
  bg="red",
  tcl="#FFF"//>>>>>>>>>>>>>>>>
}){

  return <StyledLazyBtn color={bg} text_color={tcl}>
    <Icon src={img} />
    <Text>Too lazy to cook?</Text>
  </StyledLazyBtn>

}