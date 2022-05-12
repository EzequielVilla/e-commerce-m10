import { Searcher } from "components/searcher";
import { Title } from "ui/text";
import { Root } from "./styled";

export function HomeSearch() {
  return (
    <Root>
      <Title>
        El mejor <br /> e-commerce
      </Title>
      <Searcher></Searcher>
    </Root>
  );
}
