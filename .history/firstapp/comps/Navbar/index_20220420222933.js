import styled from "styled-components";

import { useRouter } from 'next/router';


const NavBottom = styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 1em;
    background-color: white;
`;

const Button = styled.button`
    background-image: url("${props=>props.icon}");
    background-size: 100% 100%;
    width: 60px;
    height: 60px;
    border-radius: 20px; 
    border: none;
`


export default function Navbar(){

    const r = useRouter();

    return <NavBottom>
        <Button icon="/Logo/logo1.png" onClick = {
            ()=>r.push("/recipes")
        }></Button>
        <Button icon="/Logo/Logo_restaurant.png" onClick = {
            ()=>r.push("/quiz")
        }></Button>
        <Button icon="/Logo/Logo_localFood.png" onClick = {
            ()=>r.push("/recipes")
        }></Button>
    </NavBottom>
}