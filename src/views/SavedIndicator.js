/**
 * SavedIndicator.js
 *
 * Renders a message to let the user know data has been saved
 */
import React from "react";
import PropTypes from "prop-types";

const styles = {
  saved: {
    color: "green",
    fontStyle: "italic"
  }
};

const SavedIndicator = ({ done, handleDone }) => (
  <div>
    {done && (
      <span onClick={handleDone} style={styles.saved}>
        &#x2714; Saved!
      </span>
    )}
  </div>
);

SavedIndicator.propTypes = {
  // flag for the indicator visibility
  done: PropTypes.bool,

  // called to hide the indicator
  handleDone: PropTypes.func
};

export default SavedIndicator;
