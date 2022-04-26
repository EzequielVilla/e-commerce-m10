import styled from "styled-components";
import { PagesControl } from "ui/buttons";
import { StyledCard } from "ui/card";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 1300px;
  @media (min-width: 769px) {
    height: 800px;
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

export const NextPrev = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 160px 160px;
  align-content: space-between;
  align-self: center;
  align-items: center;
`;
export const Row = styled.div``;

export const Prev = styled(PagesControl)`
  grid-column: 1 / 2;
`;

export const Next = styled(PagesControl)`
  margin-left: 20px;
  grid-column: 2 / 2;
`;
