import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function MainPage() {
  return (
    <>
      <SHeader>
        <h1>BeerProd</h1>
      </SHeader>
      <SMainContainer>
        <SignInContainer>
          <form>
            <h1>Já possui uma conta?</h1>
            <h1>Entre já!</h1>
            <input
              placeholder="E-mail"
              type="email"
              required
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Senha"
              type="password"
              required
              //value={pass}
              //onChange={(e) => setPass(e.target.value)}
            />
            <button type="submit">Entrar</button>
          </form>
        </SignInContainer>
        <SignUpContainer>
          <form>
            <h1>Não tem uma conta?</h1>
            <h1>Cadastre-se</h1>
            <input
              //disabled={load}
              placeholder="Nome"
              required
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <input
              // disabled={load}
              placeholder="E-mail"
              required
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              // disabled={load}
              placeholder="Senha"
              required
              type="password"
              //value={pass}
              //onChange={(e) => setPass(e.target.value)}
              autocomplete="new-password"
            />
            <input
              // disabled={load}
              placeholder="Confirme a senha"
              required
              type="password"
              //value={confirmPass}
              //onChange={(e) => setConfirmPass(e.target.value)}
              autocomplete="new-password"
            />
            <button data-test="sign-up-submit" type="submit">
              Cadastrar
            </button>
          </form>
        </SignUpContainer>
      </SMainContainer>
    </>
  );
}

const SHeader = styled.div`
  background-color: #214405;
  height: 177px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h1 {
    color: #d9d9d9;
    font-family: Roboto;
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const SMainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 1200px;
  background-color: #D9D9D9;;
  
`;
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  h1 {
    font-family: Bebas Neue;
    color:#214405;
    font-size: xx-large;
  }
  input {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 20px;
    width: calc(100% - 10%);
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    border-radius: 5px;
  }
  button {
    font-family: Bebas Neue;
    outline: none;
    border: none;
    width: calc(100% - 50%);
    border-radius: 5px;
    background-color:#214405;
    font-size: 25px;
    color: white;
    cursor: pointer;

    padding: 12px;
  }
  a {
    font-family: Bebas Neue;
    font-size: 20px;
    line-height: 18px;
    color: #214405;
    text-decoration: none;
    padding-top: 30px;
  }
`;
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  h1 {
    font-family: Bebas Neue;
    color: #214405;
    font-size: xx-large;
  }
  input {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 20px;
    width: calc(100% - 10%);
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    border-radius: 5px;
  }
  button {
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
  a {
    font-family: Bebas Neue;
    
    font-size: 20px;
    line-height: 18px;
    color:#214405;
    text-decoration: none;
    padding-top: 30px;
  }
`;
