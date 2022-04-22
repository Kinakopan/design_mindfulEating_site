import Navbar from "../../comps/Navbar";
import LocalCard from "../../comps/Localfood/LocalCard";
import styled from 'styled-components';
import { useRouter } from "next/router";

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

// const r = useRouter();
// nst {page} = r.query;


export default function LocalFood(){
    const r = useRouter();
    const {page} = r.query;

    return (
    <StyledRecipes>
        {/* <BgChange> */}

        <HowToCatTtl>Local Food</HowToCatTtl>

        <LocalCardCont>
        <LocalPageTtl>{page}</LocalPageTtl>
            <LocalCard
                img="/localfood/picup.jpg"
                title="1. Pickup / Delivery"
                paragraph="Services you can subscribe to pickup or get delivered local dish/food"
            />

        </LocalCardCont>
        <Navbar></Navbar>
    </StyledRecipes>
    )
}
