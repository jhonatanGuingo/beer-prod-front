import styled from "styled-components";
import HeaderLogged from "../components/HeaderLogged";
import Productions from "../components/Productions";
import { BrewerySideBar } from "../components/BrewerySideBar";
import CreateBatchModal from "../components/Modals/BatchModal/CreateBatchModal";
import { useContext, useState } from "react";
import UserBreweries from "../contexts/UserBreweries";

export default function ProductionsPage() {
  const [openBatch, setOpenBatch] = useState(false);
  const handleOpenBatch = () => setOpenBatch(true);
  const handleCloseBatch = () => setOpenBatch(false);
  const { valueSelect, setValueSelect } = useContext(UserBreweries);
  useEffect(() => {
    if (valueSelect === "default") return setRecipes(null);
    const promise = axios.get(`/recipes/brewery/${valueSelect}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    promise.then((res) => {
      console.log(res.data);
      setRecipes(res.data);
    });
    promise.catch((err) => {});
  }, [valueSelect]);
  return (
    <>
      <HeaderLogged />
      <ContainerMain>
        <SideBar>
          <BrewerySideBar/>
          <button onClick={handleOpenBatch}>Começar produção</button>
          <button>Concluir produção</button>
          <button>Excluir produção</button>
        </SideBar>
        <ContainerProduction>
          <CreateBatchModal isOpenBatch = {openBatch} onCloseBatch={handleCloseBatch} />
          <h1>Produções:</h1>
          <ProductionCardContainer>
            <Productions />
            <Productions />
            <Productions />
            <Productions />
            <Productions />
          </ProductionCardContainer>
        </ContainerProduction>
      </ContainerMain>
    </>
  );
}
const ContainerMain = styled.div`
  display: flex;
`;

const ProductionCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ContainerProduction = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1200px;
  background-color: #d9d9d9;
  box-sizing: border-box;
  padding: 40px;
  h1 {
    color: #1e1e1e;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
  }
`;
const SideBar = styled.div`
  display: flex;
  background: #1e1e1e;
  flex-direction: column;
  width: 300px;
  height: 1200px;
  button {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 0.6em;
    color: #d9d9d9;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 700;

    &:hover,
    &:focus {
      background-color: #d9d9d9;
      color: #214405;
      outline: 0;
    }
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
      box-shadow: 0 0 40px 40px #d9d9d9 inset;
    }
  }
`;
