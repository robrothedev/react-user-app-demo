/**
 * useUsers.js
 *
 * State management for the list of users
 */
import { useState, useEffect } from "react";
import Api from "../Api";

const useUsers = () => {
  const [state, setState] = useState({
    // bool for fetching progress in the ui
    loading: true,

    // list of users
    users: null
  });

  // fetch the users when the component is mounted
  useEffect(() => {
    fetchUsers();
  }, []);

  // call the api to fetch the list of users
  let fetchUsers = async () => {
    setState({ ...state, loading: true });

    try {
      let res = await Api.fetchUsers();
      setState({ loading: false, users: res.data });

      // error fetching users
    } catch (e) {
      setState({ loading: false, users: null });
    }
  };

  /**
   * A user has been updated so find the user in the list and update the object in the user array
   *
   * @param {Object} user | New user information
   */
  let updateUser = async user => {
    let updatedUsers = state.users.map(u => (u.id === user.id ? user : u));
    setState({ ...state, users: updatedUsers });
  };

  return {
    loading: state.loading,
    users: state.users,
    updateUser
  };
};

export default useUsers;
