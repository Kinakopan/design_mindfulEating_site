import styled from "styled-components";

import { useRouter } from 'next/router';


const NavBottom = styled.div`
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 1em;
    background-color: white;
    z-index: 101;
`;

const Button = styled.button`
    background-image: url("${props=>props.icon}");
    background-color: white;
    background-size: cover;
    width: 25%;
    height: 70px;
    border: none;
    cursor: pointer;
`


export default function Navbar(){

    const r = useRouter();

    return <NavBottom>
        <Button icon="/logo0.png" onClick = {
            ()=>r.push("/")
        }></Button>

        <Button icon="/logo1.png" onClick = {
            ()=>r.push("/recipes")
        }></Button>
        <Button icon="/logo2.png" onClick = {
            ()=>r.push("/restaurant")
        }></Button>
        <Button icon="/logo3.png" onClick = {
            ()=>r.push("/localfood/localfood")
        }></Button>
    </NavBottom>
}
