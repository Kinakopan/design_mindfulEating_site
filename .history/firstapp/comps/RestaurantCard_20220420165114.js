
import styled from 'styled-components';


const ReCont = styled.div`
background-color:${props=>props.cl};
width:500px;
align-items: center;
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
font-size: 16px;
text-align: left;
width:50px;
margin: 120x;


`
;


const ResItem = styled.div`
text-align: justify;
`
;

const Title = styled.h2`
  
`
;

const Button = styled.img`
background-color:"red";
height:20px;
`


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
        <Button img src="/start rating.png"></Button>
        <Text>{txt}</Text>
       
       
    </ResItem>
    
    </ReCont>
}


//export default function RestaurantCard(){
    //return(
   //     <img src="/veg out.png" />
   // )
   
//}

