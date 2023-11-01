import styled from "styled-components";

export default function InviteUserModal({isOpenInvite, onCloseInvite}) {
  if(!isOpenInvite) return null;
  return (
    <BackgroundModal>
      <ContainerModal>
        <h1>Convidar Usuário</h1>
        <button className='close' onClick={() => onCloseInvite()}>X</button>
        <form>
            <h2>Escolher Cervejaria</h2>
        <select name="Cervejaria">
            <option value="valor1">São Barto</option>
            <option value="valor2" >Valor 2</option>
            <option value="valor3">Valor 3</option>
            </select>
            <h2>E-mail</h2>
          <input placeholder="Email do convidado" required type="text" />
          <h2>Escolher Função</h2>
          <select name="select">
            <option value="valor1">Cervejeiro</option>
            <option value="valor2">Administrador</option>
            <option value="valor3">Soviet</option>
            </select>
          <button className="submit" type="submit">Convidar</button>
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
  z-index: 10;
`
const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 450px;
  height: 480px;
  background-color: #D9D9D9;
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
  select{
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

    color: white;
    cursor: pointer;

    padding: 12px;
  }
`;
