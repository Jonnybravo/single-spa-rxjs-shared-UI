import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Input as SUIInput } from "semantic-ui-react";

function Input(props) {
  const { value, placeholder, actionName, onClick, onChange } = props;

  useEffect(() => {
    console.log("HELLOOO");
  }, []);

  return (
    <SUIInput
      value={value}
      onChange={onChange}
      action={{ content: actionName, onClick: onClick }}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  value: PropTypes.number,
  placeholder: PropTypes.string,
  actionName: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default Input;
