import styled from "styled-components";

export const HeaderPokemons = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  height: 168px;
  padding: 0 16px;
  background: url("/images/headerPokemons/bg.svg") no-repeat center center;
  background-size: cover;
  
  .top {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 8px;
    
    .buscar {
      min-width: 48px;
      height: 48px;
      border: 0;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      color: #fff;
    }
    
    .limpar {
      min-width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      color: #fff;
    }
    
    .field {
      padding-top: 16px;
      position: relative;
      width: 100%;
      input {
        width: 100%;
        height: 48px;
        padding: 16px 48px 16px 16px;
        border: 0;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        &::placeholder {
          color: #fff;
        }

        &:focus {
          outline: none;
          border: 1px solid #fff;
        }
      }
    }
    
    
  }
  
  .buttons {
    margin-top: 32px;
    display: flex;
    justify-content: end;
    .filtro {
      width: 100%;
      max-width: 150px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url("/images/buttons/base.svg") no-repeat center center;
      background-size: contain;
      border: 0;
      
      span {
        font-size: 12px;
        color: #fff;
        padding-bottom: 6px;
      }
      
      &:hover {
        filter: brightness(110%);
      }
      
    }
  }
  
`;