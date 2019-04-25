/**
 * useUserForm.js
 *
 * State management for handling the user form changes and submition
 */
import { useState, useEffect } from "react";
import Api from "../Api";

/**
 * @param {Object} user
 */
const useUserForm = user => {
  let [state, setState] = useState();

  // update the state with the user when the component mounts
  useEffect(() => {
    setState(user);
  }, [user]);

  /**
   * Updates state from the input changes on the user form
   *
   * @param {Object} e | Input object
   */
  let onChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  /**
   * Submits the user form data to the api
   *
   * @param {Object} e  | Form object
   */
  let onSubmit = async e => {
    e.preventDefault();
    await Api.saveUser(state);
  };

  return {
    user: state,
    onChange,
    onSubmit
  };
};

export default useUserForm;
