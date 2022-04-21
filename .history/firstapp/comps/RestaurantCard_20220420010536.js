
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
styled.h3`
color: red
`
;

const ReImg = styled.img`
width:100px;
padding: 1 1 auto auto;
`;

export default function RestaurantCard({
    img="/veg out.png",
    bg="#E0E8FD",
    h3 class="" ="Veg Out",
    txt="Small, vegan food truck that offers burgers, wings, fries and shakes. Located near Brentwood skytrain station",

}){

    return <ReCont 
    cl={bg} txt={txt}>
    <h3>{h3}</h3>
    <ReImg src={img}></ReImg>
    <p>{txt}</p>
    </ReCont>
}


//export default function RestaurantCard(){
    //return(
   //     <img src="/veg out.png" />
   // )
   
//}

