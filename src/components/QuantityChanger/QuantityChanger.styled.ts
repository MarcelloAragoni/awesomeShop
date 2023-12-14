import styled from "styled-components";

export const QuantityChanger = styled.div`
  display: flex;
  flex-direction: row;
  width: 85px;

  button {
    padding-top: 0;
    background-color: none;
    width: 35px;
  }

  div {
    width: 30px;
    height: 30px;
    border: none;

    input {
      width: 25px;
      height: 25px;
      background-color: transparent;
      border: none;
      text-align: center;
    }
  }
`;
