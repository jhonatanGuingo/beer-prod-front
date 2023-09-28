import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function MainPage() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [load, setLoad] = useState(false)
    const [emailLogin, setEmailLogin] = useState("");
    const [passLogin, setPassLogin] = useState("");

    function signIn(e) {
        e.preventDefault();
        const promise = axios.post("/signIn", {
          email: emailLogin,
          password: passLogin,
        });
    
        promise.then((res) => {
          const { userId, name, token } = res.data;
          setUser({ userId, name, token });
          localStorage.setItem("user", JSON.stringify({ userId, name, token }));
          navigate("/")
        });
    
        promise.catch((err) => {
          console.log(err.response.data);
        });
      }

    function signUp(e) {
        e.preventDefault();
        setLoad(true);
    
        if (pass != confirmPass) {
          alert("As senhas devem ser iguais");
          setLoad(false);
          return;
        }
    
        const promise = axios.post("/signUp", {
          name: name,
          email: email,
          password: pass,
        });
    
        promise.then((res) => {
          alert("Conta criada com sucesso");
          setLoad(false);
        });
    
        promise.catch((err) => {
          alert(err.response.data);
          setLoad(false);
        });
      }
  return (
    <>
      <SHeader>
        <h1>BeerProd</h1>
      </SHeader>
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
          </form>
        </SignInContainer>
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
