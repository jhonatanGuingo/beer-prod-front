import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import Header from "../components/HeaderMain";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function SignUpPage(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [load, setLoad] = useState(false);
    const [confirmPass, setConfirmPass] = useState("");
    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();
        setLoad(true);
    
        if (pass != confirmPass) {
          alert("As senhas devem ser iguais");
          setLoad(false);
          return;
        }
    
        const promise = axios.post("/users", {
          name: name,
          email: email,
          password: pass,
        });
    
        promise.then((res) => {
          toast("Conta criada com sucesso");
          setLoad(false);
          navigate('/')
        });
    
        promise.catch((err) => {
          toast("Não foi possível criar a conta, verifique os dados");
          setLoad(false);
        });
      }
    return(
        <>
        <Header/>
        <SMainContainer>
        <SignUpContainer>
          <form onSubmit={signUp}>
            <h1>Não tem uma conta?</h1>
            <h1>Cadastre-se</h1>
            <input
              disabled={load}
              placeholder="Nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <input
              disabled={load}
              placeholder="E-mail"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              disabled={load}
              placeholder="Senha"
              required
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autocomplete="new-password"
            />
            <input
              disabled={load}
              placeholder="Confirme a senha"
              required
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              autocomplete="new-password"
            />
            <button disabled={load} type="submit">
            {load ? (
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#FFFFFF"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            ) : (
              "Cadastrar"
            )}
            </button>
            <Link to={`/`}>Já possui conta? Entre agora!</Link>
          </form>
        </SignUpContainer>
        </SMainContainer>
        </>
    )
}
const SMainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 1200px;
  background-color: #d9d9d9;
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
    color: #214405;
    text-decoration: none;
    padding-top: 30px;
  }
`;
