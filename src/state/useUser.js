/**
 * useUser.js
 *
 * State management for fetching a user and updated the user
 */

import { useState, useEffect } from "react";
import Api from "../Api";

/**
 * @param {String} userId
 */
const useUser = userId => {
  let [state, setState] = useState({
    // flag to show a loading progress in the ui
    loading: true,

    // user data object to be rendered
    user: null
  });

  // find the user when the component has been mounted
  useEffect(() => {
    findUser();
  }, []);

  // call the api to find a user by id and update the state
  let findUser = async () => {
    try {
      let res = await Api.findUser(userId);
      setState({ loading: false, user: res.data });

      // error fetching user
    } catch (e) {
      setState({ loading: false, user: null });
    }
  };

  /**
   * Updates the user state when the form has been submitted
   *
   * @param {Object} user
   */
  let changeUser = user => {
    setState({ ...state, user: user });
  };

  return {
    user: state.user,
    changeUser
  };
};

export default useUser;
