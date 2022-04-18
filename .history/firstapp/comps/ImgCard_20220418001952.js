import { Children } from 'react';
import styled from 'styled-components';

const CardCont = styled.div`
    background-color: ${props=>props.cl};
    color: ${props=>props.text_cl};  
    width: 500px;
    padding-left: 1em;
`;

const DispImage = styled.img`
    width: 100%;
`;


export default function ImgCard({
    img="/food1.png",
    bg="#E0E8FD",
    tcl="#08213E",
    title="This is title",
    txt="main content",
    Children=null

}){

    return <CardCont cl={bg} text_cl={tcl}> 
        <h1>{title}</h1>
        <DispImage src={img}/>
        <p>{txt}</p>
        {Children}
        
    </CardCont>
}