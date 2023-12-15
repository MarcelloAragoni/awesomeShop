import styled from "styled-components";

export const ProductsContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 15px;

  img {
    width: 250px;
    border-radius: 5px;
  }
`;

export const ProductsInfoContainer = styled.div`
  margin-top: 5px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductsInfoCategory = styled.p`
  color: #5c4c73;
  font-weight: 600;
  text-transform: capitalize;
`;

export const ProductsInfoTitle = styled.p`
  color: #9588a9;
  text-transform: capitalize;
`;

export const ProductsInfoPrice = styled.span`
  color: #5c4c73;
  text-transform: capitalize;
`;

export const ProductsPriceAddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
