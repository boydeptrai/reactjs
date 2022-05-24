import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.func
};
function InputField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = errors[name];
  console.log(errors[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      fullWidth
      label={label}
      margin="normal"
      variant="outlined"
      disabled={disabled}
      error={!!hasError}
      helperText={errors[name]?.message}
    >
      <TextField fullWidth />
    </Controller>
  );
}
export default InputField;
