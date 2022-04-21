import { Children } from 'react';
import styled from 'styled-components';

const CardCont = styled.div`
    background-color: ${props=>props.cl};
    color: ${props=>props.text_cl};  
    width: 100px;
    padding: 1em 3em 1em 3em;
    border-radius: ${props=>props.border_radius}
`;

export default function RestaurantCard({
    img="/veg out.png",
    bg="white",


}){

    
}