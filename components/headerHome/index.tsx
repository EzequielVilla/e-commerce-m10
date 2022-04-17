import BurgerMenu from "components/menu";
import { useIsLogged, useLogOut } from "lib/hooks";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Subtitle, Text } from "ui/text";

import {
  Root,
  ShoppingContainer,
  StyledShoppingCart,
  OptionsContainer,
  StyledLogginButton,
  LogoutContainer,
} from "./styled";

export function HeaderHome() {
  const router = useRouter();
  const setLogged = useLogOut();
  const logged = useIsLogged();

  const logOutHandler = () => {
    setLogged(false);
  };

  return (
    <Root>
      <ShoppingContainer onClick={() => router.push("/")}>
        <StyledShoppingCart></StyledShoppingCart>
        <Subtitle color="white">Compralo</Subtitle>
      </ShoppingContainer>
      <BurgerMenu></BurgerMenu>
      {!logged ? (
        <StyledLogginButton onClick={() => router.push("logIn")}>
          Ingresar
        </StyledLogginButton>
      ) : (
        <StyledLogginButton onClick={logOutHandler}>Logout</StyledLogginButton>
      )}
      <OptionsContainer></OptionsContainer>
    </Root>
  );
}
