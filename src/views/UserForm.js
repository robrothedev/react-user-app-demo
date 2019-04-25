/**
 * UserForm.js
 *
 * Renders a form to edit a users information
 */
import React from "react";
import PropTypes from "prop-types";
import FormInput from "./FormInput";

// renders a submit button and disables the button while saving
const SubmitButton = ({ saving }) => (
  <button type="submit" disabled={saving}>
    {!saving && <React.Fragment>Save</React.Fragment>}
    {saving && <React.Fragment>Saving...</React.Fragment>}
  </button>
);

const UserForm = ({ user, onChange, onSubmit, saving }) => (
  <div className="animated fadeIn">
    <form onSubmit={onSubmit} className="user-form">
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={user.name}
        onChange={onChange}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={user.email}
        onChange={onChange}
      />
      <SubmitButton saving={saving} />
    </form>
  </div>
);

SubmitButton.propTypes = {
  saving: PropTypes.bool
};

UserForm.propTypes = {
  user: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  saving: PropTypes.bool
};

export default UserForm;
