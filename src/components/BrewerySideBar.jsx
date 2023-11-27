import styled from "styled-components";

export function BrewerySideBar(){
    return (
        <SideBar>
            <h1>Cervejaria</h1>
            <h1>São Bartolomeu</h1>
            </SideBar>
    )
}

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    box-sizing: border-box;
    padding-top: 15px;
    padding-bottom: 15px;
  background-color: #214405 ;
  h1 {

    color: #fff;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;