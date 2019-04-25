/**
 * FormInput.js
 *
 * Reusable component to render a form input
 */
import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ label, type, name, value, onChange }) => (
  <div className="form-group">
    <label htmlFor="name">{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormInput;
