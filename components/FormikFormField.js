import React from "react";
import InputElement from "./InputElement";
import { useFormikContext } from "formik";
import FormikError from "./FormikError";

function FormikFormField({ name , ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <InputElement
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {errors[name] && touched[name] && <FormikError error={errors[name]} />}
    </>
  );
}

export default FormikFormField;
