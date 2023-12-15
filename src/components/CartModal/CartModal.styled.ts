import styled from "styled-components";

export const ModalLayer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(231 222 209 / 80%);
  z-index: -1;
  border: none;
`;

export const ModalScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  background-size: cover;
  padding: 1.25rem;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 35%;
  top: 10%;
  z-index: 101;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #ec6d75;

  .CloseButton {
    width: 200px;
    height: 45px;
    background-color: #ec6d75;
    color: white;
    align-self: center;
    border-radius: 20px;
    margin-top: 15px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
  }
`;
