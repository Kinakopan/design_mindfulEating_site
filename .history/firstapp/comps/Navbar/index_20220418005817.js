import styled from "styled-components";

const Nav_bottom = styled.div`
    width: 500px;
    height: 150px;
`;


export default function Navbar(){

    return <Nav_bottom>
        <button>Nav 1</button>
        <button>Nav 2</button>
        <button>Nav 3</button>
    </Nav_bottom>
}