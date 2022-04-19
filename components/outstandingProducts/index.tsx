import { useGetAllProducts } from "hooks/hooks";
import { StyledCardContent, StyledCardMedia } from "ui/card";
import { Subtitle, Text } from "ui/text";
import { Card, Products, Root } from "./styled";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/router";

export function OutstandingProducts() {
  const allProducts = useGetAllProducts();
  const router = useRouter();
  allProducts?.sort((a, b) => {
    return b["Total units sold"] - a["Total units sold"];
  });
  const clickHandler = (objectID: string) => {
    router.push(`/item/${objectID}`);
  };
  return (
    <Root>
      {allProducts ? (
        <>
          <Subtitle>
            Productos <br /> destacados
          </Subtitle>
          <Products>
            {allProducts.map((item, index) => {
              if (index < 2) {
                return (
                  <Card key={item.objectID}>
                    <StyledCardMedia
                      component="img"
                      image={item.Images[0].url}
                      onClick={() => clickHandler(item.objectID)}
                    />
                    <StyledCardContent>
                      <Text>{item.Name}</Text>
                      <Subtitle>${item["Unit cost"]}</Subtitle>
                    </StyledCardContent>
                  </Card>
                );
              }
            })}
          </Products>
        </>
      ) : (
        <Products>
          <Skeleton variant="rectangular" width={330} height={480} />
          <Skeleton variant="rectangular" width={330} height={480} />
        </Products>
      )}
    </Root>
  );
}
