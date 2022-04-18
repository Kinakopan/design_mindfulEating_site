import styled from "styled-components";

const Navbottom = styled.div`
    width: 500px;
    height: 110px;
`;


export default function Navbar(){

    return <Navbottom>
        <button>
            <img src="/favicon.ico"/>
            Nav 1
        </button>
        <button>Nav 2</button>
        <button>Nav 3</button>
    </Navbottom>
}