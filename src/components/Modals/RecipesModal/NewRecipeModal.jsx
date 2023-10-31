import { useState } from "react";
import styled from "styled-components";

export default function NewRecipeModal({isOpen, onClose}) {
  if(!isOpen) return null;
  const [steps, setSteps] = useState(['', '', '']); // Inicialmente, três campos de etapas

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleStepChange = (index, text) => {
    const newSteps = [...steps];
    newSteps[index] = text;
    setSteps(newSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <BackgroundModal>
      <ContainerModal>
        <h1>IPA</h1>
        <h2>Etapas</h2>
        <button className='close' onClick={() => onClose()}>X</button>
        <form onSubmit={handleSubmit}>
      
      {steps.map((step, index) => (
        <div key={index}>
          <input
            type="text"
            value={step}
            placeholder= {"Etapa " + (index + 1)}
            onChange={(e) => handleStepChange(index, e.target.value)}
          />
          <button className="removeStep" type="button" onClick={() => removeStep(index)}>
            -
          </button>
        </div>
      ))}
      <button className="addStep" type="button" onClick={addStep}>
        +
      </button>
      <button className ="submit" type="submit">Enviar</button>
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
  background-color: rgb(0,0,0,0.7);
  z-index: 1000;
`
const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 450px;
  font-family: Bebas Neue;
  background-color: #D9D9D9;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  border-radius: 17px;
  z-index: 5;
padding: 20px;
h2{
  font-size: 20px;
  margin-bottom: 10px;
}
  input {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 20px;
    width: calc(100% - 25%);
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
  .close{
    position: fixed;
    top:20px;
    right: 20px
    
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
  .removeStep {
      margin-left: 20px;
      background-color: #214405;
      color: white;
      border: none;
  }
  .addStep {
    background-color: white;
      color: #214405;
      border: none;
  }
  .submit {
    font-family: Bebas Neue;
    outline: none;
    border: none;
    width: calc(100% - 50%);
    border-radius: 5px;
    background-color: #214405;
    font-size: 25px;
    margin-bottom: 30px;
    color: white;
    cursor: pointer;

    padding: 12px;
  }
`;
