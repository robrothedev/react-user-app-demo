/**
 * UserProvider.js
 *
 * Provides global state for viewing and editing a user
 */

import React, { createContext } from "react";
import PropTypes from "prop-types";
import useUser from "./useUser";
import useUserForm from "./useUserForm";
import useFormToggle from "./useFormToggle";

export const UserContext = createContext();

export function UserProvider({ children, userId, updateUser }) {
  // first fetch the user
  let user = useUser(userId);

  // create a state object for the component
  let state = {
    user,
    form: useUserForm(user.user, updateUser),
    formToggle: useFormToggle()
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  // child props to render
  children: PropTypes.node,

  // user id used to fetch a user from the api
  userId: PropTypes.string,

  // callback to use for the user list when user information has been updated
  updateUser: PropTypes.func
};
