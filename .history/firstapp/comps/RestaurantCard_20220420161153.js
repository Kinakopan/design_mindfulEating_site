
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

const ReImg = styled.img`
width:100px;
padding: 1 1 auto auto;
`;

const Text = styled.p`
top:20px;

`
;

const Starts = styled.button `
width:100px;
height:15px;
left:500px;
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
        <Starts img="/start rating.png"></Starts>
        <button img="/start rating.png"></button>
    </ResItem>
    </ReCont>
}


//export default function RestaurantCard(){
    //return(
   //     <img src="/veg out.png" />
   // )
   
//}

