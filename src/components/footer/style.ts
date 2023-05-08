import styled from "styled-components";

export const FooterContainder = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 32.63%);
  
  div {
    height: 40px;
    width: 1px;
    background: white;
    opacity: 0.5;
  }
  
  button {
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme["text-white"]};
  }
`