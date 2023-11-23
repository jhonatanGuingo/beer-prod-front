import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import UserBreweries from "../contexts/UserBreweries";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;
export default function HeaderLogged() {
  const navigate = useNavigate();
  const {userData} = useContext(UserContext);
  const {breweries, setBreweries} = useContext(UserBreweries);
  const token = userData.token;
  function handleLogout() {
    localStorage.clear();
    
}


  return (
    <>
      <SHeader>
        <button onClick={() => {navigate('/beers')}}>Cervejarias</button>
        <button onClick={() => {navigate('/recipes')}}>Receitas</button>
        <button onClick={() => {navigate('/productions')}}>Produções</button>
        <button onClick={handleLogout}>Sair</button>
      </SHeader>
    </>
  );
}
const SHeader = styled.div`
  background-color: #214405;
  height: 177px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  }
}
`;
