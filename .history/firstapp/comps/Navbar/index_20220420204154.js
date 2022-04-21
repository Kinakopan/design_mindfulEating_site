import styled from "styled-components";


const NavBottom = styled.div`
    width: 100vw;
    height: 110px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    background-color: white;
`;

const Button = styled.button`
    
    background-size: 100%;
    width: 80px;
    height: 80px;
    border-radius: 20px; 
    border: none;
`


export default function Navbar(){

    return <NavBottom>
        <Button background-image="/Logo/Logo_restaurant.png"/>
        <Button icon="/Logo/Logo_restaurant.png"/>
        <Button icon="/Logo/Logo_localFood.png"/>
    </NavBottom>
}