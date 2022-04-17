import { Layout } from "components/layout";
import { NextPage } from "next";
import { SearcherColumn } from "ui/searcher";

import { ShowSearch } from "components/showSearch";

const Query: NextPage = () => {
  return (
    <Layout>
      <SearcherColumn />
      <ShowSearch></ShowSearch>
    </Layout>
  );
};

export default Query;
