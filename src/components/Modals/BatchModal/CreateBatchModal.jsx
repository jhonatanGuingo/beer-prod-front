import { useContext, useState } from "react";
import styled from "styled-components";
import RecipesContext from "../../../contexts/RecipesContext";
import UserContext from "../../../contexts/UserContext";
import axios from "axios";


axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function CreateBatchModal({isOpenBatch, onCloseBatch}) {
    
    const {recipes} = useContext(RecipesContext);
    const [selectedRecipe, setSelectedRecipe] = useState('')
    const [selectedRecipeId, setSelectedRecipeId] = useState('')
    const { userData } = useContext(UserContext);
    const token = userData.token;
    
    if(!isOpenBatch) return null;

    function CreateBatch(e) {
        e.preventDefault();
        const body = {
            name: selectedRecipe,
            recipe_id: selectedRecipeId
        }
        console.log(body)
        const promise = axios.post("/batch", body, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
      
          promise.then((res) => {
            alert("Produção iniciada")
          })
          promise.catch((err) => {
            alert("Erro ao iniciar produção")
          })
    }


  return (
    <BackgroundModal>
      <ContainerModal>
        <h1>Começar Produção</h1>
        <button className="close" onClick={() => onCloseBatch()}>
          X
        </button>
        <form onSubmit={CreateBatch}>
          <h2>Escolher Receita</h2>
          <select
            name="Cervejaria"
            value={selectedRecipe}
            onChange={(e) => {
              setSelectedRecipe(e.target.value)
              setSelectedRecipeId(e.target.options[e.target.selectedIndex].id)}}
          >
            <option value="default" selected>
          Selecione uma receita
        </option>
            {recipes.map((recipe) => (
              <option key={recipe.ID} value={recipe.Name} id={recipe.ID}>
                {recipe.Name}
              </option>
            ))}
          </select>
          <button className="submit" type="submit">
            Começar
          </button>
        </form>
      </ContainerModal>
    </BackgroundModal>
  );
}

const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 10;
`;
const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 450px;
  height: 480px;
  background-color: #d9d9d9;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  border-radius: 17px;
  z-index: 5;
  .menu-item {
    cursor: pointer;
    padding: 5px;
    height: 28px;
    border-bottom: 1px solid rgb(187, 187, 187);
    z-index: 100;
    font-family: Bebas Neue;
  }

  input {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 20px;
    width: calc(100% - 40%);
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 1px;
    :focus {
      border: 2px solid #ffb6b6;
      margin: 0px;
    }
  }
  select {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 20px;
    width: calc(100% - 33%);
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 1px;
    :focus {
      border: 2px solid #ffb6b6;
      margin: 0px;
    }
  }
  .close {
    position: fixed;
    top: 20px;
    right: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    border-radius: 5px;
  }
  .submit {
    font-family: Bebas Neue;
    outline: none;
    border: none;
    width: calc(100% - 50%);
    border-radius: 5px;
    background-color: #214405;
    font-size: 25px;

    color: white;
    cursor: pointer;

    padding: 12px;
  }
`;
