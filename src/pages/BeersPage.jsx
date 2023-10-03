import styled from "styled-components";
import HeaderLogged from "../components/HeaderLogged";

export default function BeersPage(){
    return(
        <>
            <HeaderLogged/>
            <ContainerMain>
            <SideBar>
                <button>Criar Cervejaria</button>
                <button>Editar Cervejaria</button>
                <button>Convidar Usuário</button>
                <button>Alterar Permissões</button>
            </SideBar>
            <ContainerBeers>
                <h1>Suas Cervejarias:</h1>
                <h1>Convites:</h1>
            </ContainerBeers>
            </ContainerMain>
        </>
    )
}
const ContainerMain = styled.div`
    display: flex
`;

const ContainerBeers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1200px;
  background-color: #d9d9d9;
`
const SideBar = styled.div`
    display: flex;
    background: #1E1E1E;
    flex-direction: column;
    width: 300px;
    height: 1200px;
    button {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 0.6em;
  color: #D9D9D9;
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
    background-color:  #D9D9D9;
    color: #214405;
    outline: 0;
  }
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px #D9D9D9 inset;
  }}
`