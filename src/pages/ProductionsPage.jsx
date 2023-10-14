import styled from "styled-components";
import HeaderLogged from "../components/HeaderLogged";
import Productions from "../components/Productions";

export default function ProductionsPage() {
  return (
    <>
      <HeaderLogged />
      <ContainerMain>
        <SideBar>
          <ProductionSideBar>
            <h1>Cervejaria</h1>
            <h1>São Bartolomeu</h1>
          </ProductionSideBar>
          <button>Começar produção</button>
          <button>Concluir produção</button>
          <button>Excluir produção</button>
        </SideBar>
        <ContainerProduction>
          <h1>Produções:</h1>
          <ProductionCardContainer>
            <Productions />
            <Productions />
            <Productions />
            <Productions />
            <Productions />
          </ProductionCardContainer>
        </ContainerProduction>
      </ContainerMain>
    </>
  );
}
const ContainerMain = styled.div`
  display: flex;
`;
const ProductionSideBar = styled.div`
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
const ProductionCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ContainerProduction = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1200px;
  background-color: #d9d9d9;
  box-sizing: border-box;
  padding: 40px;
  h1 {
    color: #1e1e1e;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
  }
`;
const SideBar = styled.div`
  display: flex;
  background: #1e1e1e;
  flex-direction: column;
  width: 300px;
  height: 1200px;
  button {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 0.6em;
    color: #d9d9d9;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 700;

    &:hover,
    &:focus {
      background-color: #d9d9d9;
      color: #214405;
      outline: 0;
    }
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
      box-shadow: 0 0 40px 40px #d9d9d9 inset;
    }
  }
`;
