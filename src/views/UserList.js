/**
 * UserList.js
 *
 * Renders a list of users from the api
 */
import React from "react";
import PropTypes from "prop-types";
import UserLink from "./UserLink";
import Avatar from "./Avatar";

const UserList = ({ loading, users, quickView }) => (
  <div>
    {loading && <span>Loading...</span>}
    {!loading && !users && <span>No users were found :(</span>}
    {users &&
      users.map(u => {
        let handleQuickView = () => quickView(u);
        return (
          <div className="user-card" key={u.id}>
            <UserLink id={u.id}>
              <Avatar src={u.avatar} />
            </UserLink>
            <h4>{u.name}</h4>
            <button onClick={handleQuickView} className="btn-card">
              View
            </button>
            <UserLink id={u.id} key={u.id}>
              <button className="btn-card">Edit</button>
            </UserLink>
          </div>
        );
      })}
  </div>
);

UserList.propTypes = {
  // api fetching progress indicator
  loading: PropTypes.bool,

  // array of users to render
  users: PropTypes.array
};

export default UserList;
