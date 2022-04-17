import styled from "styled-components";
import { Button } from "@mui/material";

const ElementalButton = styled(Button).attrs((props) => ({
  variant: "contained",
}))`
  &.MuiButton-root {
    /* width: var(--mobile-width); */
    box-shadow: none;

    color: black;
    border-radius: 8px;
    padding: 5px 16px;
    font-weight: bold;
    font-size: 16px;
    text-transform: none;
    font-family: var(--font-family-type);
  }
  &.MuiButton-containedSecondary {
    color: white;
  }
`;

export const PrimaryButton = styled(ElementalButton)`
  &.MuiButton-root {
    width: 250px;

    background-color: var(--orange);
    @media (min-width: 375px) {
      width: 350px;
    }
  }
`;

export const BuyButton = styled(ElementalButton)`
  &.MuiButton-root {
    background-color: var(--lightBlue);
    padding: 10px 16px;
    font-size: 32px;
    width: 250px;
    height: 70px;
    @media (min-width: 769px) {
      width: 350px;
    }
  }
`;
export const SearchButton = styled(ElementalButton)`
  &.MuiButton-root {
    background-color: var(--blue);
    color: white;
    width: 250px;
    @media (min-width: 375px) {
      width: 350px;
    }
  }
`;
export const SearchHeaderButton = styled(PrimaryButton)`
  &.MuiButton-root {
    width: 300px;
  }
`;

export const LogginButton = styled(ElementalButton)`
  &.MuiButton-root {
    background-color: var(--pink);
  }
  &.MuiButton-containedSecondary {
    color: white;
  }
`;

export const PagesControl = styled.button`
  border: 2px solid black;
  border-radius: 20px;
  padding: 3px;
  background-color: var(--lightBlue);
  box-shadow: 3px 4px;
  cursor: pointer;
`;
