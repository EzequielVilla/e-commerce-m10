import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { Text } from "ui/text";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { MenuContainer, StyledBurger } from "./styled";
import { MenuRoot } from "./styled";
import router from "next/router";
import Link from "next/link";
import { useIsLogged, useLogOut } from "hooks";

export default function BurgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const setLogged = useLogOut();
  const logged = useIsLogged();
  const redirectProfile = logged ? "/profile" : "/logIn";

  const logOutHandler = () => {
    setLogged(false);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuRoot>
      <Box
        sx={{
          alignItems: "end",
          textAlign: "end",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <StyledBurger />
          </IconButton>
        </Tooltip>
      </Box>
      <MenuContainer>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              background:
                "linear-gradient(0deg, var(--orange) 0%, var(--pink) 100%)",
              mt: 1.5,
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                backgroundColor: "var(--pink)",
                zIndex: 0,
              },
              "@media(min-width: 1024px)": {
                display: "none",
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {!logged ? (
            <MenuItem>
              <Link href={"/logIn"} passHref>
                <Text>Ingresar</Text>
              </Link>
            </MenuItem>
          ) : (
            <MenuItem onClick={logOutHandler}>
              <Link href={"/"} passHref>
                <Text>Logout</Text>
              </Link>
            </MenuItem>
          )}
          <MenuItem>
            <Link href={redirectProfile} passHref>
              <Text>Mi perfil</Text>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/"} passHref>
              <Text>Buscar</Text>
            </Link>
          </MenuItem>
        </Menu>
      </MenuContainer>
    </MenuRoot>
  );
}
