/**
 * UserHandler.js
 *
 * Pulls the user state from context and passes it to the child props
 */
import React, { useMemo, useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../state/UserProvider";

const UserHandler = ({ children }) => {
  let { user } = useContext(UserContext);
  return useMemo(() => {
    return React.cloneElement(children, { ...user });
  }, [user.user, user.saved]);
};

UserHandler.propTypes = {
  // component to render
  children: PropTypes.node
};

export default UserHandler;
