import styled from 'styled-components';

const StyledTofuComp = styled.div`
color:${props=>props.text_color};
font-family: 'm plus 1', sans-serif;
`;

const IntroBox = styled.span`
background-color:${props=>props.color}; 
position:absolute;
right:30px;
height:250px;
width:250px;
padding:10px;
border-radius:20px;
text-align:center;
`;

const Image = styled.img`
position:absolute;
right:75px;
top:310px;
height:250px;
width:250px;
`;

const LinkBox = styled(StyledTofuComp)`
position:absolute;
right:40px;
top:520px;
height:60px;
width:250px;
text-align:right;
`;

const BtnText = styled.p`
position:absolute;
right:35px;
top:40px;
color:#A2B0D3

`

const CartBtn = styled(Image)`
position:absolute;
top:60px;
right:-10px;
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