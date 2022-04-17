import styled from "styled-components";
import { StyledCard } from "ui/card";

export const a = styled.div``;

export const Root = styled.div`
  background-color: var(--pink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 1200px;
  @media (min-width: 769px) {
    height: 700px;
    background-color: var(--lightBlue);
  }
`;

export const Products = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  align-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled(StyledCard)`
  @media (min-width: 769px) {
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
