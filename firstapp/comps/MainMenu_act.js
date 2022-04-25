import { useRouter } from 'next/router';
import styled from "styled-components";

// const MainMenuCont = styled.div`
//     width: 100vw;
//     display: flex;
//     padding: 30px 50px;
//     justify-content: space-between;
//     position: relative;
//     overflow: ${props => (props.active ? "visible" : "hidden")};
//     // overflow: ${props=>props.overFlow};

//   //   ${props => props.primary && css`
//   //   background: white;
//   //   color: black;
//   // `}
// `
const HomeMenuCont = styled.div`
    width: 70vw;
    height: 100vh;
    background: #EBEBEB;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 30%;
    padding: 0 0 80px;
`

// const HomeMenuCont = styled.div`
//     width: 70vw;
//     height: 100vh;
//     background: #EBEBEB;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     position: absolute;
//     top: 0;
//     left: 100%;
//     padding: 0 0 80px;
// `
const HomeMenuList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    height: 400px;
`
const HomeMenuItem = styled.li`
    list-style: none;
    flex: ${props=>props.flexPer};
    line-height: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
const HomeMenuHowtoList = styled(HomeMenuList)`
    flex: .6;
    justify-content: space-between;
    padding: 20px 30px;
    height: 300px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`
const HomeMenuLogo = styled.img`
    width: 250px;
    height: auto;
    margin: 0 auto;
`

export default function MainMenuActive({
    perc=".4",
}){

    return <HomeMenuCont id="HomeMenuCont">
          <HomeMenuList>
            <HomeMenuItem flexPer={perc}>Home Page</HomeMenuItem>
            <HomeMenuHowtoList>
              <HomeMenuItem>Recipes</HomeMenuItem>
              <HomeMenuItem>Restaurant</HomeMenuItem>
              <HomeMenuItem>Local Food</HomeMenuItem>
            </HomeMenuHowtoList>
          </HomeMenuList>
          <HomeMenuLogo src="/Logo/menuPage_logo.png" />
        </HomeMenuCont>
  }
