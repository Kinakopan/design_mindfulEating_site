import styled from "styled-components";

import { useRouter } from 'next/router';


const NavBottom = styled.div`
    width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 1em;
    background-color: white;
`;

const Button = styled.button`
    background-image: url("${props=>props.icon}");
    background-color: white;
    background-size: 100% 100%;
    width: 40px;
    height: 40px;
    border: none;
`


export default function Navbar(){

    const r = useRouter();

    return <NavBottom>
        <Button icon="/Logo/logo1.png" onClick = {
            ()=>r.push("/recipes")
        }></Button>
        <Button icon="/Logo/logo2.png" onClick = {
            ()=>r.push("/restaurant")
        }></Button>
        <Button icon="/Logo/logo3.png" onClick = {
            ()=>r.push("/localfood/localfood")
        }></Button>
    </NavBottom>
}