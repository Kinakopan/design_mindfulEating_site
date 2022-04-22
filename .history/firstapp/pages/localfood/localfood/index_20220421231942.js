import Navbar from "../../../comps/Navbar";
import LocalCard from "../../../comps/Localfood/LocalCard";
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
    margin-bottom:0;
`;

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
                path="/local_pickup"
            />

            <LocalCard
                img="/localfood/farmersMarkets.jpg"
                title="2. Farmers&#39; Markets (VFM)"
                paragraph="Farmers markets in Vancouver where you can buy local food"
                path="/local_farmersMarket"
            />

            <LocalCard
                img="/localfood/grocerystore.jpg"
                title="3. Grocery Stores &amp; Markets"
                paragraph="Grocery stores &amp; markets in Vancouver where you can buy local food."
                path="/groceryStore"
            />

            <LocalCard
                img="/localfood/seafood.jpg"
                title="4. Local Seafood"
                paragraph="Places in Vancouver where you can buy local seafood"
                path="/local_seafood"
            />

            <LocalCard
                img="/localfood/farmToTable.jpg"
                title="5. Farm-to-Table"
                paragraph="Farm-to-table restaurants in Vancouver"
                path="/local_farmToTable"
            />
        </LocalCardCont>
        <Navbar></Navbar>
    </StyledRecipes>
    )
}
