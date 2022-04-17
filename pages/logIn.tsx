import type { NextPage } from "next";

import { LayoutWithoutSearch } from "components/layoutWitoutSearch";
import { OutstandingProducts } from "components/outstandingProducts";
import { InputWithLabel } from "ui/inputs";
import { LogInSteps } from "components/logInSteps";

const LogIn: NextPage = () => {
  return (
    <LayoutWithoutSearch>
      <LogInSteps />
    </LayoutWithoutSearch>
  );
};

export default LogIn;
