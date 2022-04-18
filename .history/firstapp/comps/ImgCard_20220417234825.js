import { Children } from 'react';
import styled from 'styled-components';

const cardCont = styled.div`
    background-color: ${props=>props.cl};
    color:${props=>props.text_cl};
    
`;

export default function ImgCard({
    img="/food1.png",
    bg="#E0E8FD",
    tcl="#08213E",
    title="This is title",
    txt="main content",
    Children=null

}){

    return <cardCont cl={bg} text_cl={tcl}> 
        <h1>{title}</h1>
        <img src={img} />
        <p>{txt}</p>
        {Children}
        
    </cardCont>
}