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

const HowToCatTtl = styled.h1`
    width:100%;
`;

const LocalPageTtl = styled.h2`
    width:100%;
`;

// const BgChange = styled.div`
// background-color:#E0E8FD;
// `;


export default function LocalFood(){
    return (
    <StyledRecipes>
        {/* <BgChange> */}

        <HowToCatTtl>Local Food</HowToCatTtl>

        <LocalCardCont>
        <LocalPageTtl>5 ways of how to find local food</LocalPageTtl>
            <LocalCard
                img="/localfood/picup.jpg"
                title="1. Pickup / Delivery"
                paragraph="Services you can subscribe to pickup or get delivered local dish/food"
            />

            <LocalCard
                img="/recipes3.png"
                title="2. Farmers’ Markets (VFM)"
                paragraph="Farmers markets in Vancouver where you can buy local food"
            />

            <LocalCard
                img="/recipes4.png"
                title="Mapo Tofu"
                paragraph="Spicy Sichuan style tofu dish with rice."
            />
        </LocalCardCont>
        <Navbar></Navbar>
    </StyledRecipes>
    )
}
