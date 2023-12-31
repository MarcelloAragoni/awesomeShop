import styled from "styled-components";

export const AppContainer = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
`;

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 160px;

  .Cart {
    width: fit-content;
    padding-inline: 10px;
    gap: 5px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
