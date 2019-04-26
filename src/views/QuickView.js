/**
 * QuickView.js
 *
 * Renders a user card with a link to edit their information
 */
import React from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
import UserLink from "./UserLink";

const QuickView = ({ user, handleClose }) => (
  <React.Fragment>
    {user && (
      <div>
        <button onClick={handleClose} className="btn-close">
          &times;
        </button>
        <UserCard user={user} />
        <UserLink id={user.id}>Edit</UserLink>
      </div>
    )}
  </React.Fragment>
);

QuickView.propTypes = {
  user: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default QuickView;
