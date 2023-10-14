import styled from "styled-components";

export default function Productions() {
  return (
    <>
      <ProductionsCard>
        <h1>IPA</h1>
        <h3>Data de Início: 19/09/2023 14:00</h3>
        <h3>Etapa Anterios: Moer o Lúpulo</h3>
        <h3>Próxima Etapa: Torrar o malte</h3>
        <h3>Lote: 256</h3>
      </ProductionsCard>
    </>
  );
}

const ProductionsCard = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 9px;
  margin-bottom: 15px;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid #1e1e1e;
  background: #d9d9d9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  h1 {
    color: #000;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h3 {
    margin-bottom: 5px;
    color: #6b1515;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
