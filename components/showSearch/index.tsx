import {
  useCheckStatusOrder,
  useGetAllProducts,
  useGetSearch,
} from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledCardMedia, StyledCardContent } from "ui/card";
import { Subtitle, BodyBold, Text } from "ui/text";
import { Card, Products, Root, NextPrev, Prev, Next } from "./styled";
import Skeleton from "@mui/material/Skeleton";

export function ShowSearch() {
  const router = useRouter();
  const q = router.query.q as string;
  const { min, max, setAdd, page, setPage, setQ, data, total } = useGetSearch();

  useEffect(() => {
    if (q) {
      setQ(q);
    }
  }, [q]);
  console.log({ data });

  const nextPageHandler = () => {
    setAdd(true);
    setPage(page + 1);
  };
  const previousPageHandler = () => {
    setAdd(false);
    setPage(page - 1);
  };

  const clickHandler = (objectID: string) => {
    // window.alert("Redirigiendo");
    router.push(`/item/${objectID}`);
  };
  return (
    <Root>
      {total ? (
        <Subtitle>Total: {total}</Subtitle>
      ) : (
        <Subtitle>Total:0</Subtitle>
      )}
      <Products>
        {data ? (
          <>
            {data.results.map((item: any) => {
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
            })}
          </>
        ) : (
          <Products>
            <Skeleton variant="rectangular" width={330} height={480} />
            <Skeleton variant="rectangular" width={330} height={480} />
          </Products>
        )}
      </Products>
      <NextPrev>
        {!max && !min ? (
          <>
            <Prev>
              <BodyBold onClick={previousPageHandler}>
                {"<"} Previous page
              </BodyBold>
            </Prev>
            <Next>
              <BodyBold onClick={nextPageHandler}> Next page {">"}</BodyBold>
            </Next>
          </>
        ) : min && !max ? (
          <Next>
            <BodyBold onClick={nextPageHandler}> Next page {">"} </BodyBold>
          </Next>
        ) : max && !min ? (
          <Prev>
            <BodyBold onClick={previousPageHandler}>
              {" "}
              {"<"} Previous page
            </BodyBold>
          </Prev>
        ) : null}
      </NextPrev>
    </Root>
  );
}
