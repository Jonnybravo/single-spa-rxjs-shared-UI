import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  const { level, color } = props;

  const CustomTag = `h${level}`;

  return <CustomTag style={{ color: color }}>{props.children}</CustomTag>;
}

Title.propTypes = {
  level: PropTypes.number,
};

export default Title;
