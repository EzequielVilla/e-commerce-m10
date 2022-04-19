import { useBuy, useCheckStatusOrder } from "hooks/hooks";
import { useEffect, useState } from "react";
import { BuyButton } from "ui/buttons";
import { StyledCardMedia } from "ui/card";
import { Subtitle, Text, Body } from "ui/text";
import { Root, Info, Imagen, Name, Cost, Buy, Description } from "./styled";
import CircularProgress from "@mui/material/CircularProgress";

export function ShowItem({ data }: any) {
  const [imagen, setImagen] = useState();
  const [description, setDescription] = useState();
  const [name, setName] = useState();
  const [cost, setCost] = useState();
  const [productID, setProductID] = useState();

  const { buy, setBuy, setProductId } = useBuy();

  const { status } = useCheckStatusOrder();

  useEffect(() => {
    if (data) {
      setImagen(data.result.Images[0].url);
      setDescription(data.result.Description);
      setName(data.result.Name);
      setCost(data.result["Unit cost"]);
      setProductID(data.result.objectID);
    }
  }, [data]);

  const buyHandler = () => {
    setProductId(productID);
    setBuy(true);
  };

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
