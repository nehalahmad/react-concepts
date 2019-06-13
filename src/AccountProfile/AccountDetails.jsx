// AccountDetails.jsx
import React from "react";

import { AccountConsumer } from "./../providers/AccountProvider";

const AccountDetails = () => (
  <AccountConsumer>
    {({ username, dateJoined, membershipLevel }) => (
      <div>
        <p>Username: {username}</p>
        <p>Date Joined: {dateJoined}</p>
        <p>Membership Level: {membershipLevel}</p>
      </div>
    )}
  </AccountConsumer>
);

export default AccountDetails;
