// AccountProfile/index.jsx
import React, { Fragment } from "react";

import AccountDetails from "./AccountDetails";
import AccountUpdate from "./AccountUpdate";

const AccountProfile = () => (
  <Fragment>
    <AccountDetails />
    <AccountUpdate />
  </Fragment>
);

export default AccountProfile;
