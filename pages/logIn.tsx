import type { NextPage } from "next";

import { LayoutWithoutSearch } from "components/layout-without-search";
import { OutstandingProducts } from "components/outstanding-products";
import { InputWithLabel } from "ui/inputs";
import { LogInSteps } from "components/log-in-steps";

const LogIn: NextPage = () => {
  return (
    <LayoutWithoutSearch>
      <LogInSteps />
    </LayoutWithoutSearch>
  );
};

export default LogIn;
