
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
width:20%;
padding: 1 1 auto auto;
`;


const Text = styled.p`
float:right;
width:80%;
font-size: 16px;
text-align: left;
margin: 3 3 3 3;

`
;


const ResItem = styled.div`
text-align: justify;
`
;

const Title = styled.h2`

left:200px;
  
`
;

const Button = styled.img`
top:100px;
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
    <Button img src="/start rating.png"></Button>
    <ResItem>
    
        <ReImg src={img}></ReImg>
        
        <Text>{txt}</Text>
       
       
    </ResItem>
    
    </ReCont>
}


//export default function RestaurantCard(){
    //return(
   //     <img src="/veg out.png" />
   // )
   
//}

