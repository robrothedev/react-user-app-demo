/**
 * RenderEditUser.js
 *
 * Renders out a button to toggle the edit form visibility, the form to edit
 * the user and an indicator when the form has been saved
 */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import UserForm from "./UserForm";
import SavedIndicator from "./SavedIndicator";

const RenderEditUser = ({
  isEditing,
  toggle,
  user,
  onChange,
  onSubmit,
  saving,
  done,
  handleDone
}) => {
  useEffect(() => {
    // hide the saved indicator after x amount of seconds if it's done
    if (done === true) setTimeout(() => handleDone(), 3000);
  });

  // render components for the edit form if a user was found
  return (
    <div>
      {user && (
        <React.Fragment>
          <SavedIndicator done={done} handleDone={handleDone} />
          {!done && <span className="btn-edit" onClick={toggle} />}
          {isEditing && (
            <UserForm
              user={user}
              onChange={onChange}
              onSubmit={onSubmit}
              saving={saving}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

RenderEditUser.propTypes = {
  // flag for edit form visibility
  isEditing: PropTypes.bool,

  // function to toggle form visibility
  toggle: PropTypes.func,

  // user for form
  user: PropTypes.object,

  // form user state event
  onChange: PropTypes.func,

  // updates the user
  onSubmit: PropTypes.func,

  // flag for saving state
  saving: PropTypes.bool,

  // flag for successful save
  done: PropTypes.bool,

  // function to toggle done
  handleDone: PropTypes.func
};

export default RenderEditUser;
