import type { NextPage } from "next";
import { LayoutWithoutSearch } from "components/layout-without-search";

import { ProfileInputs } from "components/profile-inputs";

const Profile: NextPage = () => {
  return (
    <LayoutWithoutSearch>
      <ProfileInputs />
    </LayoutWithoutSearch>
  );
};

export default Profile;
