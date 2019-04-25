/**
 * Avatar.js
 *
 * Renders an image of the users avatar with styles
 */
import React from "react";
import PropTypes from "prop-types";

const styles = {
  // base class for user avatar images
  avatar: {
    display: "block",
    margin: "0 auto",
    marginBottom: 12,
    border: "1px solid silver",
    width: 64,
    height: 64,
    borderRadius: 100
  },

  // large avatar for the user page
  avatarLg: {
    width: 128,
    height: 128
  }
};

const Avatar = ({ src, lg = false }) => {
  // apply the base style
  let imgStyles = styles.avatar;

  // apply the larger style with the base style
  if (lg === true) {
    imgStyles = { ...styles.avatar, ...styles.avatarLg };
  }

  return <img alt="User Avatar" src={src} style={imgStyles} />;
};

Avatar.propTypes = {
  // img src url
  src: PropTypes.string.isRequired,

  // flag to apply additional css
  lg: PropTypes.bool
};

export default Avatar;
