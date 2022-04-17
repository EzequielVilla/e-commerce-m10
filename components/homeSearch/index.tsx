import { useMe } from "lib/hooks";
import { Searcher } from "ui/searcher";
import { Title } from "ui/text";
import { Root } from "./styled";

export function HomeSearch() {
  useMe();
  return (
    <Root>
      <Title>
        El mejor <br /> e-commerce
      </Title>
      <Searcher></Searcher>
    </Root>
  );
}
