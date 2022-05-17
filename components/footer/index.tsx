import { GridContainer, Root, StyledFooterLink } from "./styled";
import { Body, Text } from "ui/text";
import { InstagramSVG, TwitterSVG } from "ui/icons";
import { useIsLogged, useLogOut } from "hooks";

export function Footer() {
  const logged = useIsLogged();
  const setLogged = useLogOut();
  const redirectProfile = logged ? "profile" : "logIn";
  const logOutHandler = () => {
    setLogged(false);
  };

  return (
    <Root>
      <GridContainer>
        {!logged ? (
          <StyledFooterLink href="/logIn">
            <Body color="white">Ingresar</Body>
          </StyledFooterLink>
        ) : (
          <StyledFooterLink href="/">
            <Body color="white" onClick={logOutHandler}>
              Logout
            </Body>
          </StyledFooterLink>
        )}
        <StyledFooterLink href={redirectProfile}>
          <Body color="white">Mi perfil</Body>
        </StyledFooterLink>
        <StyledFooterLink href="/">
          <Body color="white">Buscar</Body>
        </StyledFooterLink>
      </GridContainer>
      <GridContainer>
        <Text color="white">Redes</Text>
        <StyledFooterLink href="/">
          <TwitterSVG />
          <Body color="white">E-Commerce</Body>
        </StyledFooterLink>
        <StyledFooterLink href="/">
          <InstagramSVG />
          <Body color="white">E-Commerce</Body>
        </StyledFooterLink>
      </GridContainer>
    </Root>
  );
}
