import Navbar from "../comps/Navbar";
import LocalCard from "../comps/Localfood/LocalCard";

import styled from 'styled-components';

const StyledRecipes = styled.div`
    background-color:#E0E8FD;
    display: flex;
    flex-direction: column;
    align-items: end;
`;

const LocalCardCont = styled.div`
    display:flex;
    align-items:end;
    justify-content:end;
    flex-direction:column;
    gap: 60px;
    width:300px;
`;

const LocalPageTtl = styled.h1`
    width:100%;
`;

// const BgChange = styled.div`
// background-color:#E0E8FD;
// `;


export default function LocalFood(){
    return (
    <StyledRecipes>
        {/* <BgChange> */}

        <LocalPageTtl>Local Food</LocalPageTtl>

        <LocalCardCont>
        <h2>5 ways of how to find local food</h2>
            <LocalCard
            img="/localfood/picup.jpg"
            title="1. Pickup / Delivery"
            paragraph="Services you can subscribe to pickup or get delivered local dish/food"
            top="820px"
            />

            <LocalCard
            img="/recipes3.png"
            title="Tofu Cutlet Curry"
            paragraph="Korean food with various vegetables mixed with rice."
            top="1020px"
            />

            <LocalCard
            img="/recipes4.png"
            title="Mapo Tofu"
            paragraph="Spicy Sichuan style tofu dish with rice."
            top="1220px"
            />
        </LocalCardCont>
        <Navbar></Navbar>
    </StyledRecipes>
    )
}
