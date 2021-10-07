import React from "react";
import PropTypes from "prop-types";

export default function Image({ src, caption }) {
  return <img className="min-w-full max-w-full" src={src} alt={caption} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
