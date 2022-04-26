import type { NextPage } from "next";

import { LayoutWithoutSearch } from "components/layout-without-search";
import { HomeSearch } from "components/home-search";
import { OutstandingProducts } from "components/outstanding-products";

const Home: NextPage = () => {
  return (
    <LayoutWithoutSearch>
      <HomeSearch />
      <OutstandingProducts></OutstandingProducts>
    </LayoutWithoutSearch>
  );
};

export default Home;
