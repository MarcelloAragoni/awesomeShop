import styled from "styled-components";

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  max-height: 500px;
  gap: 15px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .emptyCart {
    align-self: center;
  }
`;

export const CartProducts = styled.li`
  max-width: 100%;
  display: flex;
  align-items: center;
  border-radius: 15px;
  gap: 15px;

  img {
    width: 110px;
    border-radius: 5px;
  }
`;

export const CartProductsDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    color: white;
    padding-top: 0;
    background-color: #ec6d75;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  gap: 15px;
`;

export const TotalSpan = styled.span`
  padding-top: 20px;
  align-self: center;
`;
