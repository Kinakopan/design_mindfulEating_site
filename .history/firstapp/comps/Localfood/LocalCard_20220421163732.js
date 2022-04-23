
import styled from 'styled-components';

const StyledCard = styled.div`
display:flex;
flex-direction:column;
color:${props=>props.text_color};
height:auto;
width:350px;
font-family: 'm plus 1', sans-serif;
`;

const ImgBox = styled.div`
border-radius:20px 0px 0px 20px;
`;

const Img = styled.img`
width:100%;
height:auto;
`;

const TxtBox = styled.div`
display:flex;
background:#fff;
`;

const Ttl = styled.h2`
color:${props=>props.text_color};
font-family: 'm plus 1', sans-serif;
font-size:20px;
`;

const Txt = styled.p`
color:${props=>props.text_color};
font-family: 'm plus 1', sans-serif;
font-size:20px;
`;

// const Para = styled(Title)`
// font-size:16px;
// `


export default function LocalCard({
  img="/recipes1.png",
  tcl="#08213E",
  title="1. Pickup / Delivery",
  paragraph="Services you can subscribe to pickup or get delivered local dish/food",
}){

  return <StyledCard text_color={tcl}>
    <ImgBox>
      <Img src={img} />
    </ImgBox>

    <TxtBox>
      <Ttl>{title}</Ttl>
      <Txt>{paragraph}</Txt>
    </TxtBox>

  </StyledCard>

}
