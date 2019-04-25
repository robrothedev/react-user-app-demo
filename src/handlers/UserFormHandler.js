/**
 * UserFormHandler.js
 *
 * Handles form submitting for editing a user
 *
 * Handles passing state data from the user provider down to the child components
 */
import React, { useState, useMemo, useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../state/UserProvider";
import Api from "../Api";

const UserFormHandler = ({ children, updateUser }) => {
  // extracted state from the parent provider
  let { user, form, formToggle } = useContext(UserContext);

  // local state
  let [saving, setSaving] = useState(false);
  let [done, setDone] = useState(false);

  /**
   * Handles the edit user form submission
   *
   * @param {Object} e | Form event
   */
  let onSubmit = async e => {
    e.preventDefault();

    // update state of saving
    setSaving(true);

    // call the api to save the data
    await Api.saveUser(form.user);

    // simulate delayed response
    setTimeout(() => {
      // done saving
      setSaving(false);

      // hide the edit form
      formToggle.toggle();

      // update the user with the form data
      user.changeUser(form.user);

      // update the user in the list
      updateUser(form.user);

      // set done state
      setDone(true);
    }, 1000);
  };

  // called to set done state to false
  let handleDone = () => setDone(false);

  // props object for the child component to use
  let childProps = {
    isEditing: formToggle.isEditing,
    toggle: formToggle.toggle,
    user: form.user,
    onChange: form.onChange,
    onSubmit,
    saving,
    done,
    handleDone
  };

  return useMemo(() => {
    return React.cloneElement(children, childProps);
  }, [formToggle.isEditing, form.user, saving, done]);
};

UserFormHandler.propTypes = {
  // child components to return
  children: PropTypes.node,

  // callback to the user list when a users information gets updated
  updateUser: PropTypes.func
};

export default UserFormHandler;
