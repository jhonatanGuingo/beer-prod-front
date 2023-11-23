import styled from "styled-components";
import HeaderLogged from "../components/HeaderLogged";
import Breweries from "../components/Breweries";
import Guests from "../components/Guests";
import { useContext, useEffect, useState } from "react";
import NewBreweriesModal from "../components/Modals/BreweriesModal/NewBreweriesModal";
import InviteUserModal from "../components/Modals/BreweriesModal/InviteUserModal";
import UserContext from "../contexts/UserContext";
import UserBreweries from "../contexts/UserBreweries";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function BeersPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const navigate = useNavigate();
  const [openInvite, setOpenInvite] = useState(false);
  const handleOpenInvite = () => setOpenInvite(true);
  const handleCloseInvite = () => setOpenInvite(false);

  const {breweries, setBreweries} = useContext(UserBreweries);
  const {userData} = useContext(UserContext)
  const token = userData.token;

  useEffect(() => {
    
      const promise = axios.get("/brewery", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      promise.then((res) => {
       
        setBreweries(res.data)
       
      });
      promise.catch((err) => {
        
      });
    
  },[breweries])
  return (
    <>
      <HeaderLogged />
      <ContainerMain>
        <SideBar>
          <button onClick={handleOpen}>Criar Cervejaria</button>
          <button>Editar Cervejaria</button>
          <button onClick={handleOpenInvite}>Convidar Usuário</button>
          <button>Alterar Permissões</button>
        </SideBar>
        
        <ContainerBeers>
        <NewBreweriesModal isOpen = {open} setOpen = {setOpen} onClose={handleClose}/>
        <InviteUserModal isOpenInvite = {openInvite} onCloseInvite={handleCloseInvite}/>
          <h1>Suas Cervejarias:</h1>
          <BreweriesContainer>
            {breweries.map(brewery => (<Breweries key={brewery.id} brewery = {brewery} />))}
            
          </BreweriesContainer>
          <h1>Convites:</h1>
          <BreweriesContainer>
            <Guests />
          </BreweriesContainer>
        </ContainerBeers>
      </ContainerMain>
    </>
  );
}
const ContainerMain = styled.div`
  display: flex;
`;
const BreweriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ContainerBeers = styled.div`
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
