import styled from 'styled-components';

const ReCont = styled.div`
background-color:#E0E8FD;
width:500px;
align-items: center;
position: absolute;
height: 191px;
left: 1px;
top: 433px;

`;

const ReImg = styled.img`
width:150px;
padding: 1em
`;

export default function RestaurantCard({
    img="/veg out.png",
    bg="#E0E8FD",
    txt="Veg out",
    Children=null

}){

    return <ReCont></ReCont>,
    <ReImg src="veg out.png"></ReImg>
    {Children} 
}


//export default function RestaurantCard(){
    //return(
   //     <img src="/veg out.png" />
   // )
   
//}

