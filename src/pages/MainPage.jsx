import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/HeaderMain";
import { toast } from "react-toastify";
import UserContext from "../contexts/UserContext";


axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function MainPage() {
    const [emailLogin, setEmailLogin] = useState("");
    const [passLogin, setPassLogin] = useState("");
    const {setUserData} = useContext(UserContext);
    const navigate = useNavigate();

    function signIn(e) {
        e.preventDefault();
        const promise = axios.post("/auth/login", {
          email: emailLogin,
          password: passLogin,
        });
    
        promise.then((res) => {
          const { email, token } = res.data;
          setUserData({ email, token });
          console.log(res.data)
          toast('Login realizado com sucesso!');
          navigate("/beers")
        });
    
        promise.catch((err) => {
          toast('Não foi possível fazer o login!');
        });
      }
    
  return (
    <>
      <Header/>
      <SMainContainer>
        <SignInContainer>
          <form onSubmit={signIn}>
            <h1>Já possui uma conta?</h1>
            <h1>Entre já!</h1>
            <input
              placeholder="E-mail"
              type="email"
              required
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <input
              placeholder="Senha"
              type="password"
              required
              value={passLogin}
              onChange={(e) => setPassLogin(e.target.value)}
            />
            <button type="submit">Entrar</button>
           
            <Link to={`/signup`}>Primeira vez? Cadastre-se!</Link>
          </form>
        </SignInContainer>
      </SMainContainer>
    </>
  );
}


const SMainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 1200px;
  background-color: #d9d9d9;
`;
const SignInContainer = styled.div`
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
    color: #214405;
    text-decoration: none;
    padding-top: 30px;
  }
`