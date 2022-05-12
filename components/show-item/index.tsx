import { useCheckStatusOrder } from "hooks";
import { useEffect, useState } from "react";
import { BuyButton } from "ui/buttons";
import { StyledCardMedia } from "ui/card";
import { Subtitle, Text, Body } from "ui/text";
import { Root, Info, Imagen, Name, Cost, Buy, Description } from "./styled";
import CircularProgress from "@mui/material/CircularProgress";
import { buyItem } from "lib/api";
import { useRouter } from "next/router";

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
  checkIfPaid();

  const buyHandler = async () => {
    setWaiting(true);
    const res = await buyItem(objectID);
    if (res.error) router.push("/logIn");
    setOrderId(res.orderId);
    window.open(`${res.redirectTo}`, "_blank");
  };

  function checkIfPaid() {
    if (status) {
      //Este alert se abre dos veces, cambiarlo por un modal y hacer el routerpush
      //en el clickHandler de ese modal
      router.push("/");
      window.alert("Gracias por su compra");
    }
  }
  return (
    <Root>
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
