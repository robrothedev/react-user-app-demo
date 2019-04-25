/**
 * UserCard.js
 *
 * Renders user data
 */
import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

const UserCard = ({ loading, user }) => (
  <div>
    {loading && <span>Fetching user...</span>}
    {!loading && !user && <span>No user was found :(</span>}
    {!loading && user && (
      <div className="animated fadeIn">
        <Avatar src={user.avatar} lg={true} />
        <h1>{user.name}</h1>
        <h4>{user.email}</h4>
      </div>
    )}
  </div>
);

UserCard.propTypes = {
  // flag to toggle loading indicator
  loading: PropTypes.bool,

  // user to render
  user: PropTypes.object
};

export default UserCard;
