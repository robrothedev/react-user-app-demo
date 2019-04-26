/**
 * RenderUsers.js
 *
 * Renders a list of users
 */
import React, { useState, useContext } from "react";
import { UsersContext } from "../state/UsersListProvider";
import UserList from "./UserList";
import QuickView from "./QuickView";

const RenderUsers = () => {
  let state = useContext(UsersContext);

  // user state for quick view visibility
  let [user, setUser] = useState();
  let closeUser = () => setUser(null);

  return (
    <div>
      <div className="user-list">
        <UserList {...state} quickView={setUser} />
      </div>
      <div className="sidebar">
        <QuickView user={user} handleClose={closeUser} />
      </div>
    </div>
  );
};

export default RenderUsers;
