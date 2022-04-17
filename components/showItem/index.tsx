import { useBuy, useCheckStatusOrder } from "lib/hooks";
import { useEffect, useState } from "react";
import { BuyButton } from "ui/buttons";
import { StyledCardMedia } from "ui/card";
import { Subtitle, Text, Body } from "ui/text";
import { Root, Info, Imagen, Name, Cost, Buy, Description } from "./styled";
import CircularProgress from "@mui/material/CircularProgress";

export function ShowItem({ data }: any) {
  const { buy, setBuy, setProductId } = useBuy();

  const { status } = useCheckStatusOrder();

  const imagen = data.result.Images[0].url;
  const description = data.result.Description;
  const name = data.result.Name;
  const cost = data.result["Unit cost"];
  const productId = data.result.objectID;

  const buyHandler = () => {
    setProductId(productId);
    setBuy(true);
  };
  // useEffect(()=>{
  //   if(buy && status) router.push("")
  // },[status])
  return (
    <Root>
      <Imagen component="img" image={imagen} />
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
//ya tener cargado en el build los productos usando ssw y swr. ssw para guardar en el servidor la data y swr para llamarla solo una vez.
//seleccionar 2 o 3 productos random y mostrarlo en la card.
