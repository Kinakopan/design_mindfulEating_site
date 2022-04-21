import styled from "styled-components";


const Navbottom = styled.div`
    width: 500px;
    height: 110px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    background-color: white;
`;

const Button = styled.button`
    background-image: url("${props=>props.icon}");
    background-size: 100%;
    width: 100vw;
    height: 80px;
    border-radius: 20px; 
    border: none;
`


export default function Navbar(){

    return <Navbottom>
        <Button icon="/favicon.ico"/>
        <Button icon="/favicon.ico"/>
        <Button icon="/favicon.ico"/>
    </Navbottom>
}