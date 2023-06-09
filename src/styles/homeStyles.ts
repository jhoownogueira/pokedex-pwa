import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  
  section {
    width: 100%;
    max-width: 480px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;  
    background: #D42B4D;
    
    header {
      display: flex;
      justify-content: flex-start;
      gap: 24px;
      padding: 16px 16px 0 16px;
      
      .spearker-display {
        max-width: 60px;
        min-width: 60px;
        max-height: 60px;
        min-height: 60px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
                
      }
      
      .spearker-led {
        max-width: 88px;
        min-width: 88px;
        max-height: 24px;
        min-height: 24px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: -8px;
      }

      .spearker-square {
        width: 20px;
        height: 20px;
      }

      .square-blue {
        background-color: #196A9E;
      }

      .square-blue-sky {
        background-color: #28AAFD;
      }

      .square-white {
        background-color: #FFFFFF;
      }
      
      .square-red {
        background-color: #89061C;
      }
      
      .square-yellow {
        background-color: #FDBC2A;
      }
      
      .square-green {
        background-color: #00AF1B;
      }
    }
    
    .hr-top {
      width: 100%;
      height: 60px;
      margin-bottom: 12px;
      
      img {
        width: 90%;
      }
    }
    
    h1 {
      font-size: 30px;
      color: #fff;
      padding-left: 24px;
    }
    
    .led {
      display: flex;
      align-items: center;
      margin-top: 12px;
      height: fit-content;
      
      img {
        width: 70%;
      }
    }
    
    footer {
      margin-top: 2rem;
      width: 100%;
      height: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      
      a, button {
        width: 100%;
        max-width: 280px;
        height: 48px;
        border: 0;
        background: url("/images/pokedex/button.svg") no-repeat center center;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        font-size: 16px;
        color: #fff;
        padding-bottom: 1rem;
        padding-top: 0.8rem;
        span {
          
        }
        
        &:hover {
          filter: brightness(110%);
        }
      }
    }
    
  }
  
`;