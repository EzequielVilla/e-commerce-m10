import { useCheckStatusOrder } from "hooks";
import { useEffect, useState } from "react";
import { BuyButton, LogginButton, SearchButton } from "ui/buttons";
import { StyledCardMedia } from "ui/card";
import { Subtitle, Text, Body } from "ui/text";
import {
  Root,
  Info,
  Imagen,
  Name,
  Cost,
  Buy,
  Description,
  BoxModalContainer,
  ModalContainer,
  ModalStyled,
} from "./styled";
import CircularProgress from "@mui/material/CircularProgress";
import { buyItem } from "lib/api";
import { useRouter } from "next/router";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CSS from "csstype";

interface ItemData {
  data: {
    result: {
      Description: string;
      Name: string;
      "Unit cost": number;
      Images: {
        url: string;
      }[];
      objectID: string;
    };
  };
}

export function ShowItem({ data }: ItemData) {
  const obj = {
    result: {
      Description: "",
      Name: "",
      "Unit cost": 0,
      Images: [
        {
          url: "",
        },
      ],
      objectID: "",
    },
  };
  if (data?.result == undefined) null;
  else {
    Object.assign(obj, data);
  }
  const {
    Description: description,
    Name: name,
    ["Unit cost"]: cost,
    objectID,
    Images,
  } = obj.result;

  const router = useRouter();
  const [waiting, setWaiting] = useState(false);
  const { setOrderId, status } = useCheckStatusOrder();

  const buyHandler = async () => {
    setWaiting(true);
    const res = await buyItem(objectID);
    if (res.error) router.push("/logIn");
    setOrderId(res.orderId);
    window.open(`${res.redirectTo}`, "_blank");
  };
  const handleClose = () => {
    console.log("close");
    router.push("/");
  };

  return (
    <Root>
      <ModalStyled
        hideBackdrop
        open={status ? status : false}
        onClose={handleClose}
      >
        <BoxModalContainer>
          <Subtitle>Gracias por su compra</Subtitle>
          <SearchButton onClick={handleClose}>Volver al inicio</SearchButton>
        </BoxModalContainer>
      </ModalStyled>

      <Imagen component="img" image={Images[0].url} />
      <Info>
        <Name>{name}</Name>
        <Cost>${cost}</Cost>
        <Buy onClick={buyHandler}>
          {!waiting ? (
            <>Comprar</>
          ) : waiting && !status ? (
            <CircularProgress />
          ) : (
            <>Comprar</>
          )}
        </Buy>
        <Description>{description}</Description>
      </Info>
    </Root>
  );
}
