/**
 * useFormToggle.js
 *
 * State management for handling the user edit form visibility
 */
import { useState } from "react";

const useFormToggle = () => {
  // bool and function to set bool for form visibility
  let [isEditing, setEdit] = useState(false);

  // called to show/hide the edit form
  let toggle = () => setEdit(!isEditing);

  return { isEditing, toggle };
};

export default useFormToggle;
