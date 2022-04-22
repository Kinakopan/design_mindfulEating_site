import Navbar from "../../../comps/Navbar";
import Local_detail_top from "../../../comps/Localfood/LocalDetails";
import Local_detail_item from "../../../comps/Localfood/LocalDetailItem";
import styled from 'styled-components';

const LocalWrap = styled.div`
    background-color:#fff;
    display: flex;
    flex-direction: column;
    align-items: end;
    overflow:hidden;
`;

const LocalDetailItemCont = styled.ul`
    display:flex;
    align-items:end;
    justify-content:end;
    flex-direction:column;
    gap: 60px;
    width:100%;
    background:#E0E8FD;
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
    <LocalWrap>
        {/* <BgChange> */}

        <HowToCatTtl>Local Food</HowToCatTtl>

        <Local_detail_top
                img="/localfood/picup.jpg"
                title="1. Pickup / Delivery"
                paragraph="Services you can subscribe to pickup or get delivered local dish/food"
            />

        <LocalDetailItemCont>
            <Local_detail_item>
            </Local_detail_item>

        </LocalDetailItemCont>

        <Navbar></Navbar>
    </LocalWrap>
    )
}
