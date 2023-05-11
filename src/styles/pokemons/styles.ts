import styled from "styled-components";

export const PokemonsContainer = styled.section`
  
  background: #EFEFEF;
  width: 100%;
  max-width: 480px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding-top: 180px;
  padding-bottom: 100px;
  padding-left: 16px;
  padding-right: 16px;

`;

export const CardPokemons = styled.div`
  width: 108px;
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  
  header {
    width: 100%;
    display: flex;
    justify-content: end;
    padding-right: 8px;
    
    span {
      font-size: 8px;
    }
  }
  
  img {
    width: 64px;
    height: 64px;
  }
  
  footer {
    width: 100%;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EFEFEF;
    h2 {
      font-size: 8px;
      color: #666666;
      text-align: center;
    }
  }

`;