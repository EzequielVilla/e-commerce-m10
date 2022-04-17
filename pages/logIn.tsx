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

//ya tener cargado en el build los productos usando ssw y swr. ssw para guardar en el servidor la data y swr para llamarla solo una vez.
//seleccionar 2 o 3 productos random y mostrarlo en la card.

export default LogIn;
