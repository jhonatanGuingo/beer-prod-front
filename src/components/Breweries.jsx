import styled from "styled-components";

export default function Breweries(brewery) {

  
  return (
    <>
      <BreweriesCard>
        <h1>{brewery.brewery.name}</h1>
        <h3>Função: {brewery.brewery.role}</h3>
        
      </BreweriesCard>
    </>
  );
}

const BreweriesCard = styled.div`
  width: 300px;
  height: 200px;
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
    color: #6b1515;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
