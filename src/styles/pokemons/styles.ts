import styled from "styled-components";


export const PokemonsContainer = styled.section`
  overflow-anchor: none;
  background: #EFEFEF;
  width: 100%;
  max-width: 480px;
  height: 100%;
  margin: 0 auto;
  padding: 180px 16px 100px;
  
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  
  .pagination {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    
    button {
      width: 100%;
      height: 32px;
      border: 1px solid #D42B4D;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &[hidden] {
        display: none;
      }
      
      svg {
        color: #D42B4D;
      }
    }
  }

`;

export const CardPokemons = styled.a`
  width: 100%;
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-decoration: none;
  color: #666666;

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