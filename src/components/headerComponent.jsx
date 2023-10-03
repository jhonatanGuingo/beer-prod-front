import styled from "styled-components";

export default function Header() {
  return (
    <>
      <SHeader>
        <h1>BeerProd</h1>
      </SHeader>
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