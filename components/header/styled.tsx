import { Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import styled from "styled-components";
import { LogginButton } from "ui/buttons";
import { BurguerOption, ShoppingCart } from "ui/icons";

export const Root = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 10px;
  align-content: space-between;
  align-self: center;
  align-items: center;
  height: 90px;
  color: white;
  @media (min-width: 1024px) {
    //cambio en el header del burger por las opciones desplegadas
    height: 110px;
    grid-template-columns: 25% 50% 25%;
    align-content: center;
    align-items: center;
    .search-button {
      margin-left: 10px;
    }
  }
`;

export const StyledLogginButton = styled(LogginButton).attrs(() => ({
  color: "secondary",
}))`
  width: 140px;

  justify-self: center;
  @media (max-width: 1023px) {
    //cambio en el header del burger por las opciones desplegadas
    display: none;
  }
`;

export const ShoppingContainer = styled.div`
  display: flex;
  justify-items: center;
  cursor: pointer;
  margin-left: 10px;
  width: 200px;
`;

export const StyledShoppingCart = styled(ShoppingCart)``;

export const OptionsContainer = styled(Grid).attrs(() => ({
  container: true,
  direction: "column",
}))``;
export const SearchBar = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-self: center;
  @media (max-width: 1023px) {
    display: none;
  }
` as any;
//SearchBar va a tener que ser un form hook
