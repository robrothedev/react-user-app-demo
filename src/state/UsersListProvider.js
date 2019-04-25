/**
 * UsersListProvider.js
 *
 * Global state provider for a list of users so we don't need to refetch them on each page view
 */
import React, { createContext } from "react";
import useUsers from "./useUsers";

export const UsersContext = createContext();
export function UsersListProvider({ children }) {
  let state = useUsers();
  return (
    <UsersContext.Provider value={state}>{children}</UsersContext.Provider>
  );
}
