import type { NextPage } from "next";
import { LayoutWithoutSearch } from "components/layoutWitoutSearch";

import { ProfileInputs } from "components/profileInputs";

const Profile: NextPage = () => {
  return (
    <LayoutWithoutSearch>
      <ProfileInputs />
    </LayoutWithoutSearch>
  );
};

//ya tener cargado en el build los productos usando ssw y swr. ssw para guardar en el servidor la data y swr para llamarla solo una vez.
//seleccionar 2 o 3 productos random y mostrarlo en la card.

export default Profile;
