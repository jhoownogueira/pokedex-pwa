import styled from "styled-components";

export const ContainerNotFound = styled.section`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  h1 {
    font-size: 16px;
    text-align: center;
    margin-top: 16px;
    color: #666666;
  }
`;


export const NotFound = styled.div`
  width: 228px;
  height: 182px;
  background: url("/images/not-found.png") no-repeat center center;
  background-size: cover;
`;