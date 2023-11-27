import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function NewRecipeModal({isOpen, onClose}) {

  if(!isOpen) return null;
  const {userData} = useContext(UserContext)
  const token = userData.token;
  const [steps, setSteps] = useState([{ instruction: '',  name: '' }]); // Inicialmente, três campos de etapas
  const [nameRecipe, setNameRecipe] = useState('');
  
  const addStep = () => {
    setSteps([...steps, { name: '', instruction: '' }]);
  };

  const removeStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleStepNameChange = (index, e) => {
    const newSteps = [...steps];
    newSteps[index].name = e.target.value;
    setSteps(newSteps);
  };

  const handleStepDescriptionChange = (index, e) => {
    const newSteps = [...steps];
    newSteps[index].instruction = e.target.value;
    setSteps(newSteps);
  };
 
  
  function handleSubmit(e){
    e.preventDefault();

    const body = {
      brewery_id: "2cdc9830-2bd3-4eb7-b4d9-fe36c79900fc",
      name: nameRecipe,
      steps
    }

    const promise= axios.post("/recipes", body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    promise.then(res => {
      console.log(res.data)
    })

    promise.catch((err) => {
        
    });
  };

  return (
    <BackgroundModal>
      <ContainerModal>
        
        <button className='close' onClick={() => onClose()}>X</button>
        <form onSubmit={handleSubmit}>
        <input className="nome" type="text" placeholder="Nome da receita" value={nameRecipe} onChange={(e) => setNameRecipe(e.target.value)} />
        <h2>Etapas</h2>
      {steps.map((step, index) => (
        <div key={index}>
          <input className="etapa"
            type="text"
            value={step.name}
            placeholder= {"Etapa " + (index + 1)}
            onChange={(e) => handleStepNameChange(index, e)}
          />
          <button className="removeStep" type="button" onClick={() => removeStep(index)}>
            -
          </button>
          <textarea value={step.instruction} onChange={(e) => handleStepDescriptionChange(index,e)} placeholder="Instruções"></textarea>
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
textarea {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 15px;
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
.nome {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 15px;
    height: 8px;
    width: calc(100% - 50%);
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
  .etapa {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 15px;
    height: 8px;
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
