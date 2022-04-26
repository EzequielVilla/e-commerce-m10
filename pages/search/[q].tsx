import { Layout } from "components/layout";
import { NextPage } from "next";
import { SearcherColumn } from "components/searcher";

import { ShowSearch } from "components/show-search";

const Query: NextPage = () => {
  return (
    <Layout>
      <SearcherColumn />
      <ShowSearch></ShowSearch>
    </Layout>
  );
};

export default Query;
