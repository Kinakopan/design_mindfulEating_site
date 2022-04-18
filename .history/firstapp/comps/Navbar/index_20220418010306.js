import styled from "styled-components";

const Navbottom = styled.div`
    width: 500px;
    height: 110px;
`;


const PlaceIcon = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
`;

export default function Navbar(){

    return <Navbottom>
        <button>
            <PlaceIcon src="/favicon.ico"/>
            Nav 1
        </button>
        <button>Nav 2</button>
        <button>Nav 3</button>
    </Navbottom>
}