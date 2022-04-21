import { Children } from 'react';
import styled from 'styled-components';



export default function RestaurantCard({
    img="/food1.png",
    bg="#E0E8FD",
    tcl="#08213E",
    title="",
    txt="",
    bor="",
    n1,n2,n3,n4="",
    Children=null

}){

    return <CardCont cl={bg} text_cl={tcl} border_radius={bor}> 
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