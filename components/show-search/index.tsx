import { useGetSearch } from "hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledCardMedia, StyledCardContent } from "ui/card";
import { Subtitle, BodyBold, Text } from "ui/text";
import { Card, Products, Root, NextPrev, Prev, Next } from "./styled";
import Skeleton from "@mui/material/Skeleton";

interface PaginationData {
  offset: number;
  total: number;
}

export function ShowSearch() {
  const router = useRouter();
  const q = router.query.q as string;
  const { data, setQ, setOffset } = useGetSearch();
  const [pagination, setPagination] = useState<PaginationData>({
    offset: 0,
    total: 0,
  });
  function getMax(): boolean {
    if (
      pagination.offset + 1 == pagination.total ||
      pagination.offset + 2 == pagination.total
    ) {
      return true;
    } else return false;
  }
  function getMin(): boolean {
    if (pagination.offset == 0) return true;
    else return false;
  }
  const max = getMax();
  const min = getMin();

  useEffect(() => {
    if (q) {
      setQ(q);
      setPagination({ ...pagination, offset: 0 });
    }
  }, [q]);

  //load the initial data
  useEffect(() => {
    if (data) setPagination({ ...pagination, total: data.pagination.total });
  }, [data]);

  //change the offset for the fetch
  useEffect(() => {
    setOffset(pagination.offset);
  }, [pagination.offset]);

  const nextPageHandler = () => {
    setPagination({ ...pagination, offset: pagination.offset + 2 });
  };
  const previousPageHandler = () => {
    setPagination({ ...pagination, offset: pagination.offset - 2 });
  };

  const clickHandler = (objectID: string) => {
    router.push(`/item/${objectID}`);
  };

  return (
    <Root>
      {pagination.total ? (
        <Subtitle>Total: {pagination.total}</Subtitle>
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
        {/* {console.log({ max: pagination.max, min: pagination.min }, "in html")} */}
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
