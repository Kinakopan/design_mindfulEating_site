import { Children } from 'react';
import styled from 'styled-components';

const LavenderCont = styled.div`
    background-color: ${props=>props.cl};
    color:${props=>props.text_cl}
`;

export default function ImgCard({
    img="/food1.png",
    bg="#E0E8FD",
    tcl="#08213E",
    Children=null

}){

    return <LavenderCont cl={bg} text_cl={tcl}> 
        <h1>Mindful eating for you and us</h1>
        <img src={img} />
        {Children}
        
    </LavenderCont>
}