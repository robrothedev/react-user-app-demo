/**
 * UserLink.js
 *
 * Renders a react router <Link> component that links to a user page using the user id
 */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserLink = ({ children, id }) => <Link to={"/" + id}>{children}</Link>;

UserLink.propTypes = {
  // component to render between link tags
  children: PropTypes.node,

  // user id for link
  id: PropTypes.string.isRequired
};

export default UserLink;
