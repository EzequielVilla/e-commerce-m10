import { Layout } from "components/layout";
import { NextPage } from "next";
import { SearcherColumn } from "ui/searcher";

import { ShowItem } from "components/showItem";

const Id: NextPage = ({ data }: any) => {
  // export default function Item({ q }: any) {
  return (
    <Layout>
      <SearcherColumn />
      <ShowItem data={data}></ShowItem>
    </Layout>
  );
};
export async function getStaticPaths() {
  const res = await fetch(`https://m9-desafio.vercel.app/api/products`);
  const data = await res.json();
  const hits = data?.result?.hits;

  return {
    paths: hits.map((item: any) => {
      return { params: { id: item.objectID } };
    }),

    fallback: true,
  };
  //recmFQSKRPCg49Hql
  //rechYamDR4qviGkkW
}

export async function getStaticProps(context: any) {
  const id = context.params.id;

  const res = await fetch(`https://m9-desafio.vercel.app/api/products/${id}`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Id;
