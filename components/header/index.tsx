import { InputField } from "components/header-input-field";
import BurgerMenu from "components/menu";
import { useIsLogged, useLogOut } from "hooks";
import { useRouter } from "next/router";
import { LogginButton, SearchButton, SearchHeaderButton } from "ui/buttons";
import { BurguerOption, ShoppingCart } from "ui/icons";
import { HeaderInput } from "ui/inputs";
import { SearcherHeader } from "components/searcher";
import { Subtitle } from "ui/text";

import {
  Root,
  ShoppingContainer,
  StyledShoppingCart,
  OptionsContainer,
  StyledLogginButton,
  SearchBar,
} from "./styled";

export function Header() {
  const logged = useIsLogged();
  const setLogged = useLogOut();
  const router = useRouter();

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
      <SearcherHeader></SearcherHeader>
      {!logged ? (
        <StyledLogginButton onClick={() => router.push("/logIn")}>
          Ingresar
        </StyledLogginButton>
      ) : (
        <StyledLogginButton onClick={logOutHandler}>Logout</StyledLogginButton>
      )}
      <OptionsContainer></OptionsContainer>
    </Root>
  );
}
