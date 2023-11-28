import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import UserBreweries from "../contexts/UserBreweries";

export function BrewerySideBar({valueSelect,setValueSelect}){
  const {breweries} = useContext(UserBreweries);
  
  
    return (
        <SideBar>
            <h1>Cervejaria: </h1>
            <select name="Cervejaria" value = {valueSelect} onChange={(e) => setValueSelect(e.target.value)}>
            <option value="default" selected>Selecione</option>
          {breweries.map((brewery) => (<option key = {brewery.id} value ={brewery.id}>
              {brewery.name}
            </option>))}
            </select>
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
  select{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 20px;
    width: calc(100% - 33%);
    ;
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
`;