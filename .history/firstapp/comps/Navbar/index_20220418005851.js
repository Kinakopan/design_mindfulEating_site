import styled from "styled-components";

const Navbottom = styled.div`
    width: 500px;
    height: 120px;
`;


export default function Navbar(){

    return <Navbottom>
        <button>Nav 1</button>
        <button>Nav 2</button>
        <button>Nav 3</button>
    </Navbottom>
}