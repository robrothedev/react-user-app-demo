/**
 * RenderUsers.js
 *
 * Renders a list of users
 */
import React, { useState, useContext } from "react";
import { UsersContext } from "../state/UsersListProvider";
import UserList from "./UserList";
import UserCard from "./UserCard";
import UserLink from "./UserLink";

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
        {user && (
          <div>
            <button onClick={closeUser} className="btn-close">
              &times;
            </button>
            <UserCard user={user} />
            <UserLink id={user.id}>Edit</UserLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default RenderUsers;
