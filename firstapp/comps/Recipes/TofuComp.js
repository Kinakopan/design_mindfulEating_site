import styled from 'styled-components';

const StyledTofuComp = styled.div`
color:${props=>props.text_color};
font-family: 'm plus 1', sans-serif;
display: flex;
flex-direction: column;
align-items:end;
`;

const IntroBox = styled.span`
background-color:${props=>props.color}; 
height:250px;
width:250px;
padding:10px;
border-radius:20px;
text-align:center;
margin: 0;
margin-left: auto;
`;

const Image = styled.img`
top:310px;
height:250px;
width:250px;
margin-top: -20px;
margin-right: 50px;
`;

const LinkBox = styled(StyledTofuComp)`
height:60px;
width:270px;
text-align:right;
margin-right:0;
margin-top:15px;
display:flex;
flex-direction:row;
align-items:center;
gap:20px;
`;

const BtnText = styled.p`
right:35px;
top:40px;
color:#A2B0D3;
`

const CartBtn = styled.img`
top:310px;
height:35px;
width:35px;
`

const Mark = styled.a`
color:#EF7F63
`

export default function TofuComp({
  img="/tofu.png", 
  bgcl="#E0E8FD",
  tcl="#08213E",
}){

  return <StyledTofuComp text_color={tcl}>
    <IntroBox color={bgcl}>
      <h2>Tofu</h2>
      <p>Tofu is an excellent source of protein in fact, it is a rare vegan choice that is a complete source of protein, which means it contains all nine amino acids</p>
    </IntroBox>

    <Image src={img} />

    <LinkBox>
      <BtnText>Get the fresh <Mark>tofu</Mark> at your local market</BtnText>
      <CartBtn src="/cartBtn.png" />
    </LinkBox>

  </StyledTofuComp>
}