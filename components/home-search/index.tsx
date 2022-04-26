import { useMe } from "hooks";
import { Searcher } from "components/searcher";
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
