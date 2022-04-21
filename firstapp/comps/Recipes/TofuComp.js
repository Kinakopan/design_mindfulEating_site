import styled from 'styled-components';

const StyledTofuComp = styled.div`
display:block;
color:${props=>props.text_color};
font-family: M PLUS 1;
`;

const IntroBox = styled.section`
background-color:${props=>props.color}; 
position:absolute;
right:30px;
height:250px;
width:250px;
padding:10px;
border-radius: 20px;
text-align:center;
`;

const Image = styled.img`
position:absolute;
right:75px;
top:280px;
height:250px;
width:250px;
`;

const LinkBox = styled(StyledTofuComp)`
display:flex;
position: absolute;
right:10px;
top:520px;
height:60px;
width:300px;
text-align:right;
`;

const CartBtn = styled(Image)`
display:flex;
height:35px;
width:35px;

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
      <p>Get the fresh tofu at your local market</p>
      <CartBtn src="/cartBtn.png" />
    </LinkBox>

  </StyledTofuComp>
}