import { Layout } from "components/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { SearcherColumn } from "ui/searcher";

const Item: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <SearcherColumn />
    </Layout>
  );
};

export default Item;
//
