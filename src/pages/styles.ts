import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  
  header {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    span {
      display: block;
      color: white;
      font-size: 24px;
    }
  }
  
  .search-pokemon {
    position: relative;
    width: 100%;
    
    label {
      color: white;
      position: absolute;
      top: 7px;
      left: 10px;
    }
    
    input {
      width: 100%;
      background: transparent;
      height: 32px;
      border: 1px solid #ccc;
      border-radius: 16px;
      padding: 0 32px;
      font-size: 16px;
    }
  }
`;