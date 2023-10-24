import styled from "styled-components";

export default function NewRecipeModal({isOpen, onClose}) {
  if(!isOpen) return null;
  return (
    <BackgroundModal>
      <ContainerModal>
        <h1>IPA</h1>
        <h2>Etapas:</h2>
        <button className='close' onClick={() => onClose()}>X</button>
        <form>
          <input placeholder="Etapa 1" required type="text" />
          <input placeholder="Etapa 2" required type="text" />
          <input placeholder="Etapa 3" required type="text" />
          <input placeholder="Etapa 4" required type="text" />
          <input placeholder="Etapa 5" required type="text" />
          <button className="submit" type="submit">Começar nova produção</button>
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
  
  background-color: #D9D9D9;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  border-radius: 17px;
  z-index: 5;
padding: 20px;
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
