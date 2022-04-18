import styled from "styled-components";

const Navbottom = styled.div`
    width: 500px;
    height: 110px;
`;

const Button = styled.button`
    background-image: url(${props=>props.icon});
    background-size: 
    height: 70px;
    width: 70px;
    border-radius: 20px; 
`


export default function Navbar(){

    return <Navbottom>
        <Button src="/favicon.ico">
            Nav 1
        </Button>
        <Button>Nav 2</Button>
        <Button>Nav 3</Button>
    </Navbottom>
}