
import styled from 'styled-components';


const ReCont = styled.div`
background-color:${props=>props.cl};
width:500px;
align-items: center;
position: absolute;
height: 250px;
left: 1px;
top: 433px;
`
;

const ReImg = styled.img.img2`
width:100px;
padding: 1 1 auto auto;
`;

const Text = styled.p`
top:20px;

`
;

const Starts = styled.img`
width:85px;
height:15px;
right:10px;
`

const ResItem = styled.div`
    display: flex;
`
;

const Title = styled.h2`
  
`
;


export default function RestaurantCard({
    img="/veg out.png",
    img2="/start rating.png"
    bg="#E0E8FD",
    h2="Veg Out",
    txt="Small, vegan food truck that offers burgers, wings, fries and shakes. Located near Brentwood skytrain station",
    

}){

    return <ReCont 
    cl={bg} txt={txt}>
    <Title>{h2}</Title>
    <ResItem>
        <ReImg src={img}></ReImg>
        <Text>{txt}</Text>
        <Starts img="start rating.png">{img2}</Starts>
    </ResItem>
    </ReCont>
}


//export default function RestaurantCard(){
    //return(
   //     <img src="/veg out.png" />
   // )
   
//}

