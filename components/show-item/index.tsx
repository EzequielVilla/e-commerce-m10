import { useBuy, useCheckStatusOrder } from "hooks";
import { useEffect, useState } from "react";
import { BuyButton } from "ui/buttons";
import { StyledCardMedia } from "ui/card";
import { Subtitle, Text, Body } from "ui/text";
import { Root, Info, Imagen, Name, Cost, Buy, Description } from "./styled";
import CircularProgress from "@mui/material/CircularProgress";

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

  const { buy, setBuy, setProductId } = useBuy();
  const { status } = useCheckStatusOrder();

  const buyHandler = () => {
    setProductId(objectID);
    setBuy(true);
  };
  return (
    <Root>
      <Imagen component="img" image={Images[0].url} />
      <Info>
        <Name>{name}</Name>
        <Cost>${cost}</Cost>
        <Buy onClick={buyHandler}>
          {!buy ? (
            <>Comprar</>
          ) : buy && !status ? (
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
