import React from 'reac';

const userToString = x => `${x.name}<${x.email}>`;

const PickUser = ({ user }) => (
  <div>
    <input value={userToString(user)} type="text" />
  </div>
);

export default PickUser;
