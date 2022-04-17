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

export default Profile;
