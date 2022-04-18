import { Children } from 'react';
import styled from 'styled-components';

const CardCont = styled.div`
    background-color: ${props=>props.cl};
    color: ${props=>props.text_cl};  
    width: 500px;
    padding: 1em 3em 1em 3em;
    border-radius: ${props=>props.border_radius}
`;

const DispImage = styled.img`
    width: 100%;
    padding: 1em;
`;


export default function ImgCard({
    img="/food1.png",
    bg="#E0E8FD",
    tcl="#08213E",
    title="This is title",
    txt="main content",
    bor="",
    h2="",
    Children=null

}){

    return <CardCont cl={bg} text_cl={tcl} border_radius={bor}> 
        <h1>{title}</h1>
        <h2>{h2}</h2>
        <DispImage src={img}/>
        <p>{txt}</p>
        {Children}    
    </CardCont>
}