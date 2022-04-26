import {
  useCheckStatusOrder,
  useGetAllProducts,
  useGetSearch,
  usePagination,
} from "hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledCardMedia, StyledCardContent } from "ui/card";
import { Subtitle, BodyBold, Text } from "ui/text";
import { Card, Products, Root, NextPrev, Prev, Next } from "./styled";
import Skeleton from "@mui/material/Skeleton";

export function ShowSearch() {
  const router = useRouter();
  const q = router.query.q as string;
  const { data, setQ, searchData, setSearchData } = useGetSearch();
  const { page, total } = searchData;
  const [offset, setOffset] = useState<number>(0);
  const [max, setMax] = useState<boolean>(false);
  const [min, setMin] = useState<boolean>(true);
  const [add, setAdd] = useState<boolean>(false);

  useEffect(() => {
    if (offset + 1 == total || offset + 2 == total) setMax(true);
    else setMax(false);
    if (offset == 0) setMin(true);
    else setMin(false);
  }, [offset]);
  //reset the values when the query changes
  useEffect(() => {
    if (q) {
      setQ(q);
      setMax(false);
      setMin(true);
      setOffset(0);
    }
  }, [q]);
  useEffect(() => {
    if (add) {
      setSearchData({
        total,
        page: page + 1,
        offset,
      });
    } else if (!add) {
      setSearchData({
        total,
        page: page - 1,
        offset,
      });
    }
  }, [add, offset]);

  const nextPageHandler = () => {
    setAdd(true);
    setOffset(offset + 2);
  };
  const previousPageHandler = () => {
    setAdd(false);
    setOffset(offset - 2);
  };

  const clickHandler = (objectID: string) => {
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
        {console.log({ min, max })}
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
