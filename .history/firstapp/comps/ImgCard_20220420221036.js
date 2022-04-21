import { Children } from 'react';
import styled from 'styled-components';

const CardCont = styled.div`
    background-color: ${props=>props.cl};
    color: ${props=>props.text_cl};  
    min-width: 375px;
    max-width: 500px;
    padding: 1em 3em 1em 3em;
    border-radius: ${props=>props.border_radius};
    margin: ${props=>props.margin};
`;

const DispImage = styled.img`
    width: 100%;
    padding: 1em;
`;

const List = styled.div`
    text-align: right;
`;

export default function ImgCard({
    img="/food1.png",
    bg="#E0E8FD",
    tcl="#08213E",
    title="",
    txt="",
    bor="",
    mar="",
    n1,n2,n3,n4="",
    Children=null

}){

    return <CardCont cl={bg} text_cl={tcl} border_radius={bor} margin={mar}> 
        <h1>{title}</h1>
        <DispImage src={img}/>
        <List>
            <h2>{n1}</h2>
            <h2>{n2}</h2> 
            <h2>{n3}</h2> 
            <h2>{n4}</h2> 
        </List> 
        <p>{txt}</p>
        {Children} 
          
    </CardCont>
}