import type { NextPage } from "next";

import { LayoutWithoutSearch } from "components/layoutWitoutSearch";
import { HomeSearch } from "components/homeSearch";
import { OutstandingProducts } from "components/outstandingProducts";

const Home: NextPage = () => {
  return (
    <LayoutWithoutSearch>
      <HomeSearch />
      <OutstandingProducts></OutstandingProducts>
    </LayoutWithoutSearch>
  );
};

export default Home;
