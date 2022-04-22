import Navbar from "../comps/Navbar";
import LocalCard from "../comps/Localfood/LocalCard";

import styled from 'styled-components';

const StyledRecipes = styled.div`

`;

const BgChange = styled.div`
background-color:#E0E8FD;
`;


export default function LocalFood(){
    return (
    <StyledRecipes>
        <BgChange>
        <h1>Local Food</h1>
        <h2>5 ways of how to find local food</h2>

            <LocalCard
            img="/recipes2.png"
            title="Tofu Bibimbap"
            paragraph="Korean food with various vegetables mixed with rice."
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
        </BgChange>

    </StyledRecipes>
    )
}
